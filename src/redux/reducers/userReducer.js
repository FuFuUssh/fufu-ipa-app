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
        case ACTIONS.USER_SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Failed to create account'
            }
        case ACTIONS.USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Failed to log in'
            }
        case ACTIONS.USER_LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Failed to log out'
            }
        default:
            return state
    }
}