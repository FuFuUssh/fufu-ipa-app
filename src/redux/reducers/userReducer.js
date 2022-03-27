import ACTIONS from "../actions/userActions"

const initialState = {
    loading: false,
    error: '',
    message: '',
    currentUser: undefined,
    profile: {
        workplace: '',
        job: ''
    },
    updateErrors: {
        username: '',
        email: '',
        password: '',
        workplace: '',
        job: ''
    },
    updateMessages: {
        username: '',
        email: '',
        password: '',
        workplace: '',
        job: ''
    }
}

export function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTIONS.SET_USER:
            return {
                ...state,
                currentUser: payload.currentUser
            }
        case ACTIONS.REMOVE_USER:
            return {
                ...state,
                currentUser: null,
            }
        case ACTIONS.USER_SIGNUP_START:
        case ACTIONS.USER_LOGIN_START:
        case ACTIONS.USER_LOGOUT_START:
        case ACTIONS.USER_RESET_PASSWORD_START:
        case ACTIONS.UPDATE_PROFILE_IMAGE_START:
            return {
                ...state,
                loading: true,
                message: '',
                error: '',
            }
        case ACTIONS.UPDATE_PROFILE_NAME_START:
            return {
                ...state,
                loading: true,
                updateMessages: {
                    ...state.updateMessages,
                    username: ''
                },
                updateErrors: {
                    ...state.updateErrors,
                    username: ''
                }
            }
        case ACTIONS.UPDATE_PROFILE_EMAIL_START: {
            return {
                ...state,
                loading: true,
                updateMessages: {
                    ...state.updateMessages,
                    email: ''
                },
                updateErrors: {
                    ...state.updateErrors,
                    email: ''
                }
            }
        }
        case ACTIONS.UPDATE_PROFILE_PASSWORD_START:
            return {
                ...state, 
                loading: true,
                updateMessages: {
                    ...state.updateMessages,
                    password: ''
                }, 
                updateErrors: {
                    ...state.updateErrors,
                    password: ''
                }
            }
        case ACTIONS.UPDATE_PROFILE_WORKPLACE_START:
            return {
                ...state,
                loading: true,
                updateMessages: {
                    ...state.updateMessages,
                    workplace: ''
                },
                updateErrors: {
                    ...state.updateErrors,
                    workplace: ''
                }
            }
        case ACTIONS.UPDATE_PROFILE_JOB_START:
            return {
                ...state,
                loading: true,
                updateMessages: {
                    ...state.updateMessages,
                    job: ''
                },
                updateErrors: {
                    ...state.updateErrors,
                    job: ''
                }
            }
        case ACTIONS.USER_SIGNUP_SUCCESS:
        case ACTIONS.USER_LOGIN_SUCCESS:
        case ACTIONS.USER_LOGOUT_SUCCESS:
        case ACTIONS.UPDATE_PROFILE_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case ACTIONS.UPDATE_PROFILE_NAME_SUCCESS:
            return {
                ...state,
                loading: false,
                updateMessages: {
                    ...state.updateMessages,
                    username: 'Your username has been updated'
                }
            }
        case ACTIONS.UPDATE_PROFILE_EMAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                updateMessages: {
                    ...state.updateMessages,
                    email: 'Your email has been updated'
                }
            }
        case ACTIONS.UPDATE_PROFILE_PASSWORD_SUCCESS: 
            return {
                ...state,
                loading: false,
                updateMessages: {
                    ...state.updateMessages,
                    password: 'Your password has been updated'
                }
            }
        case ACTIONS.UPDATE_PROFILE_WORKPLACE_SUCCESS:
            return {
                ...state,
                loading: false,
                updateMessages: {
                    ...state.updateMessages,
                    workplace: 'Your workplace has been updated'
                }
            }
        case ACTIONS.UPDATE_PROFILE_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                updateMessages: {
                    ...state.updateMessages,
                    job: 'Your job title has been updated'
                }
            }
        case ACTIONS.USER_RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: 'We have sent you an email to reset your password. Please close this tab and check your inbox for further instruction.'
            }
        case ACTIONS.USER_SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Failed to create account. Please check your email address and password then try again later.'
            }
        case ACTIONS.USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Failed to log in. Please check your email address and password then try again later.'
            }
        case ACTIONS.USER_LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Failed to log out. Please refresh and try again later.'
            }
        case ACTIONS.USER_RESET_PASSWORD_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Failed to reset your password. Please check your email address then try again later.'
            }
        case ACTIONS.UPDATE_PROFILE_IMAGE_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Failed to upload your photo. Please check the file extension, reload the page then try again.'
            }
        case ACTIONS.UPDATE_PROFILE_NAME_FAIL:
            return {
                ...state,
                loading: false,
                updateErrors: {
                    ...state.updateErrors, 
                    username: "Failed to update your username"
                }
            }
        case ACTIONS.UPDATE_PROFILE_EMAIL_FAIL:
            return {
                ...state,
                loading: false,
                updateErrors: {
                    ...state.updateErrors,
                    email: "Failed to update your email"
                }
            }
        case ACTIONS.UPDATE_PROFILE_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                updateErrors: {
                    ...state.updateErrors,
                    password: 'Failed to update your password'
                }
            }
        case ACTIONS.UPDATE_PROFILE_WORKPLACE_FAIL:
            return {
                ...state,
                loading: false,
                updateErrors: {
                    ...state.updateErrors,
                    workplace: 'Failed to update your workplace'
                }
            }
        case ACTIONS.UPDATE_PROFILE_JOB_FAIL:
            return {
                ...state,
                loading: false,
                updateErrors: {
                    ...state.updateErrors,
                    job: 'Failed to update your job title'
                }
            }
        case ACTIONS.RESET_MESSAGE:
            return {
                ...state,
                message: ''
            }
        case ACTIONS.RESET_UPDATE_MESSAGE_AND_ERROR:
            return {
                ...state,
                updateErrors: {
                    username: '',
                    email: '',
                    password: ''
                },
                updateMessages: {
                    username: '',
                    email: '',
                    password: ''
                }
            }
        case ACTIONS.GET_PROFILE_INFORMATION:
            return {
                ...state,
                profile: {
                    workplace: payload.workplace,
                    job: payload.job
                }
            }
        default:
            return state
    }
}