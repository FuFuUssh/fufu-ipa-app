const ACTIONS = {
    ADD_TOAST: 'add-toast',
    REMOVE_TOAST: 'remove-toast',
    UPDATE_TOAST: 'update-toast',
    SET_TOAST_ERROR: 'set-toast-error'
}

export function addToast(title, toastId) {
    return {
        type: ACTIONS.ADD_TOAST,
        payload: {
            title,
            toastId
        }
    }
}

export function removeToast(toastId) {
    return {
        type: ACTIONS.REMOVE_TOAST,
        payload: {
            toastId
        }
    }
}

export function updateToast(toastId, progress) {
    return {
        type: ACTIONS.UPDATE_TOAST,
        payload: {
            toast: {
                toastId,
                progress
            }
        }
    }
}

export function setToastError(toastId) {
    return {
        type: ACTIONS.SET_TOAST_ERROR,
        payload: {
            toastId
        }
    }
}

export default ACTIONS
