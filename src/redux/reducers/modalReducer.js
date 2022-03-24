import ACTIONS from "../actions/modalActions"

const initialState = {
    loading: false,
    videoLinks: [],
    error: ''
}

export function modalReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTIONS.LOAD_VIDEO_START:
            return {
                ...state,
                loading: true,
                videoLinks: [],
                error: ''
            }
        case ACTIONS.LOAD_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                videoLinks: payload.videoLinks
            }
        case ACTIONS.LOAD_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Failed to load videos'
            }
        case ACTIONS.DELETE_VIDEO_START: 
            const newVideoLinks = [...state.videoLinks]
            newVideoLinks[payload.index] = undefined
            return {
                ...state,
                loading: true,
                error: '',
                videoLinks: newVideoLinks
            }
        case ACTIONS.DELETE_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case ACTIONS.DELETE_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Failed to delete video. Please refresh then try again later.'
            }
        default:
            return state
    }
}
