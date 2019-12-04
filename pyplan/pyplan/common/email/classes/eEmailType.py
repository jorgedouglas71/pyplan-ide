from enum import Enum

class eEmailType(Enum):
    WORKFLOW_ASSIGNED_TASK = 0
    WORKFLOW_CHANGE_STATE = 1
    WORKFLOW_CHANGE_PERCENT = 2
    INTERFACE_COMMENT = 3
    INTERFACE_REFRESH_USER_IN_COMMENT = 4  # TODO:Implement this
    INTERFACE_SHARED = 5
    APPLICATION_SHARED = 6
    RESET_PASSWORD = 7
    CHANGED_PASSWORD = 8
    TEST = 9
    WELCOME_USER = 10
    CREATED_USER = 11
    ACTIVATED_USER = 12
    SCHEDULE_TASK_STATUS_CHANGED = 13
    DEACTIVATED_USER = 14  # TODO:Implement this

    def __str__(self):
        return self.value
