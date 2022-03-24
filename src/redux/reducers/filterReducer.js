import ACTIONS from "../actions/filterActions"

const initialState = {
    consonant: {
        manner: '',
        place: '',
        voicing: ''
    },
    vowel: {
        height: '',
        front_back: '',
        open_close: '',
        rounding: '',
        tensity: ''
    },
    selectedType: 'all',
    selectedSubType: '',
    dipthongValue: '',
    searchedSounds: []
}

export function filterReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTIONS.SELECT_CONSONANT_TYPE:
            return {
                ...state,
                selectedType: 'consonant'
            }
        case ACTIONS.SELECT_VOWEL_TYPE:
            return {
                ...state,
                selectedType: 'vowel'
            }
        case ACTIONS.SELECT_ALL:
            return {
                ...state,
                selectedType: 'all'
            }
        case ACTIONS.SELECT_VOWEL_HEIGHT:
            return {
                ...state,
                selectedType: 'vowel',
                vowel: {
                    ...state.vowel,
                    height: payload.value
                },
                selectedSubType: 'monothong'
            }
        case ACTIONS.SELECT_VOWEL_FRONT_BACK:
            return {
                ...state,
                selectedType: 'vowel',
                vowel: {
                    ...state.vowel,
                    front_back: payload.value
                },
                selectedSubType: 'monothong'
            }
        case ACTIONS.SELECT_VOWEL_OPEN_CLOSE:
            return {
                ...state,
                selectedType: 'vowel',
                vowel: {
                    ...state.vowel,
                    open_close: payload.value
                },
                selectedSubType: 'monothong'
            }
        case ACTIONS.SELECT_VOWEL_ROUNDING:
            return {
                ...state,
                selectedType: 'vowel',
                vowel: {
                    ...state.vowel,
                    rounding: payload.value
                },
                selectedSubType: 'monothong'
            }
        case ACTIONS.SELECT_VOWEL_TENSITY:
            return {
                ...state,
                selectedType: 'vowel',
                vowel: {
                    ...state.vowel,
                    tensity: payload.value
                },
                selectedSubType: 'monothong'
            }
        case ACTIONS.SELECT_CONSONANT_MANNER:
            return {
                ...state,
                selectedType: 'consonant',
                consonant: {
                    ...state.consonant,
                    manner: payload.value
                }
            }
        case ACTIONS.SELECT_CONSONANT_PLACE:
            return {
                ...state,
                selectedType: 'consonant',
                consonant: {
                    ...state.consonant,
                    place: payload.value
                }
            }
        case ACTIONS.SELECT_CONSONANT_VOICING:
            return {
                ...state,
                selectedType: 'consonant',
                consonant: {
                    ...state.consonant,
                    voicing: payload.value
                }
            }
        case ACTIONS.SELECT_VOWEL_CENTERING:
            return {
                ...state,
                selectedType: 'vowel',
                dipthongValue: 'centering',
                selectedSubType: 'dipthong'
            }
        case ACTIONS.SELECT_VOWEL_CLOSING:
            return {
                ...state,
                selectedType: 'vowel',
                dipthongValue: 'closing',
                selectedSubType: 'dipthong'
            }
        case ACTIONS.RESET_DIPTHONG_RADIO:
            return {
                ...state,
                selectedType: 'vowel',
                dipthongValue: '',
                selectedSubType: ''
            }
        case ACTIONS.RESET_ALL_FILTERS:
            return {
                ...initialState,
                selectedType: state.selectedType
            }
        case ACTIONS.SEARCH_SOUND:
            return {
                ...state,
                searchedSounds: payload.searchedSounds
            }
        default:
            return state
    }
}