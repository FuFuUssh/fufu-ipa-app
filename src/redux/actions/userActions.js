import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile, updateEmail, updatePassword } from "firebase/auth"
import { addDoc, collection, getDocs, query, updateDoc, onSnapshot, where, doc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { auth, db, storage } from "../../firebase"

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
    
    RESET_MESSAGE: 'reset-message',
    RESET_UPDATE_MESSAGE_AND_ERROR: 'reset-update-message-and-error',

    UPDATE_PROFILE_IMAGE_START: 'update-profile-image-start',
    UPDATE_PROFILE_IMAGE_SUCCESS: 'update-profile-image-success',
    UPDATE_PROFILE_IMAGE_FAIL: 'update-profile-image-fail',

    UPDATE_PROFILE_NAME_START: 'update-profile-name-start',
    UPDATE_PROFILE_NAME_SUCCESS: 'update-profile-name-success',
    UPDATE_PROFILE_NAME_FAIL: 'update-profile-name-fail',

    UPDATE_PROFILE_EMAIL_START: 'update-profile-email-start',
    UPDATE_PROFILE_EMAIL_SUCCESS: 'update-profile-email-success',
    UPDATE_PROFILE_EMAIL_FAIL: 'update-profile-email-fail',

    UPDATE_PROFILE_PASSWORD_START: 'update-profile-password-start',
    UPDATE_PROFILE_PASSWORD_SUCCESS: 'update-profile-password-success',
    UPDATE_PROFILE_PASSWORD_FAIL: 'update-profile-password-fail',

    UPDATE_PROFILE_WORKPLACE_START: 'update-profile-workplace-start',
    UPDATE_PROFILE_WORKPLACE_SUCCESS: 'update-profile-workplace-success',
    UPDATE_PROFILE_WORKPLACE_FAIL: 'update-profile-workplace-fail',

    UPDATE_PROFILE_JOB_START: 'update-profile-job-start',
    UPDATE_PROFILE_JOB_SUCCESS: 'update-profile-job-success',
    UPDATE_PROFILE_JOB_FAIL: 'update-profile-job-fail',

    GET_PROFILE_INFORMATION: 'get-profile-information'
}

export function signUp(email, password) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.USER_SIGNUP_START })
            await createUserWithEmailAndPassword(auth, email, password)
            await addDoc(collection(db, 'profile'), {
                userId: auth.currentUser.uid,
                workplace: '',
                job: ''
            })
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

export function reserUpdateMessagesAndErrors() {
    return {
        type: ACTIONS.RESET_UPDATE_MESSAGE_AND_ERROR
    }
}


export function resetMessage() {
    return {
        type: ACTIONS.RESET_MESSAGE
    }
}

export function updateProfilePhoto(userId, photo) {
    return function (dispatch) {
        dispatch({ type: ACTIONS.UPDATE_PROFILE_IMAGE_START })
        const path = `profile-photos/${userId}/photos/photo`
        const imageRef = ref(storage, path)
        uploadBytes(imageRef, photo).then(() => {
            getDownloadURL(imageRef).then(url => {
                updateProfile(auth.currentUser, {
                    photoURL: url
                }).then(() => dispatch({ type: ACTIONS.UPDATE_PROFILE_IMAGE_SUCCESS }))
            })
        }).catch(() => { dispatch({ type: ACTIONS.UPDATE_PROFILE_IMAGE_FAIL })})
    }
} 

export function updateProfileName(username) {
    return function (dispatch) {
        dispatch({ type: ACTIONS.UPDATE_PROFILE_NAME_START })
        updateProfile(auth.currentUser, {
            displayName: username
        })
        .then(() => dispatch({ type: ACTIONS.UPDATE_PROFILE_NAME_SUCCESS }))
        .catch(() => dispatch({ type: ACTIONS.UPDATE_PROFILE_NAME_FAIL }))
    }
}

export function updateProfileEmail(email) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.UPDATE_PROFILE_EMAIL_START })
            await updateEmail(auth.currentUser, email)
            dispatch({ type: ACTIONS.UPDATE_PROFILE_EMAIL_SUCCESS })
        } catch {
            dispatch({ type: ACTIONS.UPDATE_PROFILE_EMAIL_FAIL })
    }
    }
}

export function updateProfilePassword(password) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.UPDATE_PROFILE_PASSWORD_START })
            await updatePassword(auth.currentUser, password)
            dispatch({ type: ACTIONS.UPDATE_PROFILE_PASSWORD_SUCCESS })
        } catch {
            dispatch({ type: ACTIONS.UPDATE_PROFILE_PASSWORD_FAIL })
        }
    }
}

export function updateProfileWorkplace(userId, workplace) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.UPDATE_PROFILE_WORKPLACE_START })
            const q = query(collection(db, 'profile'), where('userId', '==', userId))
            const existingFiles = await getDocs(q)
            const existingFile = existingFiles.docs[0]
            if (existingFile != null) {
                const docToUpdate = doc(db, 'profile', existingFile.id)
                await updateDoc(docToUpdate, {
                    workplace: workplace
                })
            } else {
                await addDoc(collection(db, 'profile'), {
                    userId: userId,
                    workplace: workplace,
                    job: '',
                })
            }
            dispatch({ type: ACTIONS.UPDATE_PROFILE_WORKPLACE_SUCCESS })
        } catch {
            dispatch({ type: ACTIONS.UPDATE_PROFILE_WORKPLACE_FAIL })
        }
    }
}

export function updateProfileJob(userId, job) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.UPDATE_PROFILE_JOB_START  })
            const q = query(collection(db, 'profile'), where('userId', '==', userId))
            const existingFiles = await getDocs(q)
            const existingFile = existingFiles.docs[0]
            if (existingFile != null) {
                const docToUpdate = doc(db, 'profile', existingFile.id)
                await updateDoc(docToUpdate, {
                    job: job
                })
            } else {
                await addDoc(collection(db, 'profile'), {
                    userId: userId,
                    workplace: '',
                    job: job,
                })
            }
            dispatch({ type: ACTIONS.UPDATE_PROFILE_JOB_SUCCESS  })
        } catch {
            dispatch({ type: ACTIONS.UPDATE_PROFILE_JOB_FAIL  })
        }
    }
}

export function getProfileInformation(userId) {
    return function (dispatch) {
        const q = query(collection(db, 'profile'), where('userId', '==', userId))
        onSnapshot(q, snapshot => {
            const doc = snapshot.docs[0]
            if (!doc) return { type: 'none' }
            const profile = {
                id: doc.id,
                ...doc.data()
            }
            dispatch({
                type: ACTIONS.GET_PROFILE_INFORMATION,
                payload: {
                    workplace: profile.workplace,
                    job: profile.job
                }
            })
        })
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