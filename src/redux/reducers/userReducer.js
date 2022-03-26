import ACTIONS from "../actions/userActions"

const initialState = {
    loading: false,
    error: '',
    message: '',
    currentUser: undefined, 
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
            return {
                ...state,
                loading: true,
                message: '',
                error: ''
            }
        case ACTIONS.USER_SIGNUP_SUCCESS:
        case ACTIONS.USER_LOGIN_SUCCESS:
        case ACTIONS.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
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
        case ACTIONS.RESET_MESSAGE:
            return {
                ...state,
                message: ''
            }
        default:
            return state
    }
}