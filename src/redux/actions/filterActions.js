import IPA_SOUNDS from '../../data'

const ACTIONS = {
    SELECT_WORD_TYPE: 'select-word-type',
    SELECT_ALL: 'select-all',

    SEARCH_SOUND: 'search-sound',

    SELECT_CONSONANT_TYPE: 'select-consonant-type',
    SELECT_CONSONANT_MANNER: 'select-consonant-manner',
    SELECT_CONSONANT_PLACE: 'select-consonant-place',
    SELECT_CONSONANT_VOICING: 'select-consonant-voicing',

    SELECT_VOWEL_TYPE: 'select-vowel-type',
    SELECT_VOWEL_HEIGHT: 'select-vowel-height',
    SELECT_VOWEL_FRONT_BACK: 'select-vowel-front-back',
    SELECT_VOWEL_OPEN_CLOSE: 'select-vowel-open-close',
    SELECT_VOWEL_ROUNDING: 'select-vowel-rounding',
    SELECT_VOWEL_TENSITY: 'select-vowel-tensity',

    SELECT_VOWEL_CENTERING: 'select-vowel-centering',
    SELECT_VOWEL_CLOSING: 'select-vowel-closing',
    RESET_DIPTHONG_RADIO: 'reset-dipthong-radio',

    RESET_ALL_FILTERS: 'reset-all-filter'
}

export function switchToConsonant() {
    return {
        type: ACTIONS.SELECT_CONSONANT_TYPE
    }
}

export function switchToVowel() {
    return {
        type: ACTIONS.SELECT_VOWEL_TYPE
    }
}

export function switchToAll() {
    return {
        type: ACTIONS.SELECT_ALL
    }
}

export function selectConsonant(category, value) {
    if (!category) return { type: 'nothing'}
    
    let type
    if (category === 'manner') type = ACTIONS.SELECT_CONSONANT_MANNER
    if (category === 'place') type = ACTIONS.SELECT_CONSONANT_PLACE
    if (category === 'voicing') type = ACTIONS.SELECT_CONSONANT_VOICING
    return {
        type,
        payload: {
            value
        }
    }
}

export function selectVowel(category, value, isDipthong) {
    if (!category) return { type: 'nothing' }

    let type 
    if (!isDipthong) {
        if (category === 'height') type = ACTIONS.SELECT_VOWEL_HEIGHT
        if (category === 'front_back') type = ACTIONS.SELECT_VOWEL_FRONT_BACK
        if (category === 'open_close') type = ACTIONS.SELECT_VOWEL_OPEN_CLOSE
        if (category === 'rounding') type = ACTIONS.SELECT_VOWEL_ROUNDING
        if (category === 'tensity') type = ACTIONS.SELECT_VOWEL_TENSITY
    } else {
        if (value.toLowerCase() === 'centering') type = ACTIONS.SELECT_VOWEL_CENTERING
        if (value.toLowerCase() === 'closing') type = ACTIONS.SELECT_VOWEL_CLOSING
        if (!value) type = ACTIONS.RESET_DIPTHONG_RADIO
    }
    
    return {
        type,
        payload: {
            value
        }
    }
}

export function resetAllFilters() {
    return {
        type: ACTIONS.RESET_ALL_FILTERS
    }
}

export function searchSound(string) {
    const searchedSounds = IPA_SOUNDS.filter(sound => {
        return sound.tags.some(tag => {
            console.log(tag, string)
            return tag === string
        })
    })

    return {
        type: ACTIONS.SEARCH_SOUND,
        payload: {
            searchedSounds
        }
    }
}
 
export default ACTIONS