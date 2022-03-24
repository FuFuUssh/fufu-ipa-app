import ACTIONS from "../actions/toastActions"

export function toastReducer(state = [], { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_TOAST:
            return [
                ...state,
                {
                    id: payload.toastId,
                    title: payload.title,
                    progress: 0,
                    error: false
                }
            ]

        case ACTIONS.REMOVE_TOAST:
            const newToasts = state.filter(toast => toast.id !== payload.toastId)
            return newToasts

        case ACTIONS.UPDATE_TOAST:
            const oldToast = state.find(toast => toast.id === payload.toast.toastId)
            const index = state.indexOf(oldToast)
            const updatedToast = {
                ...oldToast,
                progress: payload.toast.progress
            }
            return [
                ...state.slice(0, index),
                updatedToast,
                ...state.slice(index + 1, state.length)
            ]
        case ACTIONS.SET_TOAST_ERROR: 
            const errorToast = state.find(toast => toast.id === payload.toast.toastId)
            const errorIndex = state.indexOf(oldToast)
            const setErrorToast = {
                ...errorToast,
                error: true
            }
            return [
                ...state.slice(0, errorIndex),
                setErrorToast,
                ...state.slice(errorIndex + 1, state.length)
            ]
        default:
            return state
    }
}