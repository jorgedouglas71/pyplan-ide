from importlib import import_module
from itertools import chain

from django.conf import settings
from django.utils import timezone
from rest_framework.exceptions import AuthenticationFailed, PermissionDenied

from pyplan.pyplan.department.models import Department
from pyplan.pyplan.security.classes.clientSession import ClientSession
from pyplan.pyplan.security.serializers import ClientSessionSerializer
from django.contrib.sessions.models import Session


class BaseService(object):

    session_store = import_module(settings.SESSION_ENGINE).SessionStore
    current_user = None
    client_session = None

    def __init__(self, request=None, session=None, base_service=None):
        if not request is None:
            self.current_user = request.user
            if session is None:
                key = request.META.get("HTTP_SESSION_KEY")
                if key:
                    self.client_session = self.getSessionByKey(key)
            else:
                self.client_session = session
        elif not session is None:
            self.client_session = session
        elif not base_service is None:
            self.current_user = base_service.current_user
            self.client_session = base_service.client_session

    def getSession(self):
        return self.client_session

    def existSession(self, session_key):
        session = self.session_store(session_key=session_key)
        if session:
            if "data" in session:
                return True
            else:
                session.delete()
        return False

    def getSessionByKey(self, session_key):
        session = self.session_store(session_key=session_key)
        if session and "data" in session:
            serializer = ClientSessionSerializer(data=session["data"])
            serializer.is_valid(raise_exception=True)
            client_session = serializer.save()
            return client_session
        if session:
            session.delete()
        raise AuthenticationFailed()

    def getMyFirstSession(self):
        session = None
        try:
            session_data = Session.objects.first()
            serializer = ClientSessionSerializer(
                data=session_data.get_decoded()["data"])
            serializer.is_valid(raise_exception=True)
            session = serializer.save()
        except Exception as ex:
            print(str(ex))
        return session

    def saveSession(self, expire_minutes=0):
        s = self.session_store(session_key=self.client_session.session_key)
        serializer = ClientSessionSerializer(self.client_session)
        s["data"] = serializer.data
        if expire_minutes > 0:
            s.set_expiry(expire_minutes)
        s.save()

    def removeSession(self):
        s = self.session_store(session_key=self.client_session.session_key)
        s.delete()

    def keepAlive(self):
        if self.client_session:
            s = self.session_store(session_key=self.client_session.session_key)
            if s:
                s["lastUpdate"] = timezone.now().isoformat()
                s["status"] = "processing"
                s.set_expiry(int(settings.TIMEOUT_FOR_PROCESSING_IN_HOURS))
                s.save()

    def endInProcess(self):
        if self.client_session:
            s = self.session_store(session_key=self.client_session.session_key)
            if s:
                s["lastUpdate"] = timezone.now().isoformat()
                s["status"] = ""
                if "isGuest" in s and s["isGuest"]:
                    s.set_expiry(int(settings.GUEST_SESSION_TIMEOUT))
                else:
                    s.set_expiry(int(settings.SESSION_COOKIE_AGE))
                s.save()

    def checkModelOpen(self):
        return self.client_session and self.client_session.modelInfo and self.client_session.modelInfo.uri

    def ensurePermision(self, code):
        """
        Ensure that current user has the permission 'code'. Otherwise throw PermissionDenied exception
        """
        if not self.current_user.has_perm(code):
            raise PermissionDenied()

    def _getDeniedFolders(self):
        """
        Denied Folders per current usercompany Department
        {"folders": ["folder"]}
        """
        userc_departments = Department.objects.filter(
            usercompanies__pk=self.client_session.userCompanyId, denied_items__folders__isnull=False).all()

        return list(chain.from_iterable(
            map(lambda item: item.denied_items['folders'], userc_departments)))

    def _getDeniedModules(self):
        """
        Denied Model Modules per current usercompany Department
        {"modules": [{"model_id": "model_a", "modules_ids": ["module_one"]}]}
        """
        userc_departments = Department.objects.filter(
            usercompanies__pk=self.client_session.userCompanyId, denied_items__modules__isnull=False).all()

        all_den_mods = list(chain.from_iterable(
            map(lambda item: item.denied_items['modules'], userc_departments)))

        curr_model_den_mods = list(
            filter(lambda item: item['model_id'] == self.client_session.modelInfo.modelId, all_den_mods))

        return list(chain.from_iterable(map(lambda item: item['modules_ids'], curr_model_den_mods)))
