from rest_framework import permissions


class UserPermissions(permissions.BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        """
        Checks permissions
        """
        has_action_permission = False
        if request.user and request.user.is_authenticated:
            if view.action in ['list', 'retrieve']:
                return True
            elif view.action in ['create']:
                has_action_permission = request.user.has_perm('pyplan.add_user')
            elif view.action in ['update', 'partial_update']:
                has_action_permission = request.user.has_perm('pyplan.change_user') or obj == request.user
            elif view.action in ['destroy']:
                has_action_permission = request.user.has_perm('pyplan.delete_user')
        return has_action_permission
