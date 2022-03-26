import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth"
import { auth } from "../../firebase"

const ACTIONS = {
    SET_USER: 'set-user',
    REMOVE_USER: 'remove-user',

    USER_SIGNUP_START: 'user-sign-up-start',
    USER_SIGNUP_SUCCESS: 'user-sign-up-success',
    USER_SIGNUP_FAIL: 'user-sign-up-fail',

    USER_LOGIN_START: 'user-log-in-start',
    USER_LOGIN_SUCCESS: 'user-log-in-success',
    USER_LOGIN_FAIL: 'user-log-in-fail',

    USER_LOGOUT_START: 'user-log-out-start',
    USER_LOGOUT_SUCCESS: 'user-log-out-success',
    USER_LOGOUT_FAIL: 'user-log-out-fail',

    USER_RESET_PASSWORD_START: 'user-reset-password-start',
    USER_RESET_PASSWORD_SUCCESS: 'user-reset-password-success',
    USER_RESET_PASSWORD_FAIL: 'user-reset-password-fail',
    
    RESET_MESSAGE: 'reset-message'
}

export function signUp(email, password) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.USER_SIGNUP_START })
            await createUserWithEmailAndPassword(auth, email, password)
            dispatch({ type: ACTIONS.USER_SIGNUP_SUCCESS })
        } catch {
            dispatch({ type: ACTIONS.USER_SIGNUP_FAIL })
        }
    }
}

export function logIn(email, password) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.USER_LOGIN_START })
            await signInWithEmailAndPassword(auth, email, password)
            dispatch({ type: ACTIONS.USER_LOGIN_SUCCESS })
        } catch {
            dispatch({ type: ACTIONS.USER_LOGIN_FAIL })
        }
    }
}

export function logOut() {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.USER_LOGOUT_START })
            await signOut(auth)
            dispatch({ type: ACTIONS.USER_LOGOUT_SUCCESS })
        } catch {
            dispatch({ type: ACTIONS.USER_LOGOUT_FAIL })
        }
    }
}

export function resetPassword(email) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.USER_RESET_PASSWORD_START })
            await sendPasswordResetEmail(auth, email)
            dispatch({ type: ACTIONS.USER_RESET_PASSWORD_SUCCESS })
        } catch {
            dispatch({ type: ACTIONS.USER_RESET_PASSWORD_FAIL })
        }
    }
}

export function resetMessage() {
    return {
        type: ACTIONS.RESET_MESSAGE
    }
}

export function setUser(user) {
    return {
        type: ACTIONS.SET_USER,
        payload: {
            currentUser: user
        }
    }
}

export function removeUser(user) {
    return {
        type: ACTIONS.REMOVE_USER,
    }
}

export default ACTIONS