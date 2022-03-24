const IPA_SOUNDS = [
    //consonants
    {
        id: 'p',
        name: 'p',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'stop',
                place: 'bilabial',
                voicing: 'voiceless'
            }
        },
        links: [
            'https://firebasestorage.googleapis.com/v0/b/nyanipa-7da14.appspot.com/o/default%2Fp%2Fvideo-1.mp4?alt=media&token=76dc74bf-7576-43c2-8435-82d499cf5cc7',
            'https://firebasestorage.googleapis.com/v0/b/nyanipa-7da14.appspot.com/o/default%2Fp%2Fvideo-2.mp4?alt=media&token=b14a38c6-95ed-4877-acee-f41ce3260e5a',
            'https://firebasestorage.googleapis.com/v0/b/nyanipa-7da14.appspot.com/o/default%2Fp%2Fvideo-3.mp4?alt=media&token=b80fd266-323c-4459-a784-fd8e2ce1ed2a',
            'https://firebasestorage.googleapis.com/v0/b/nyanipa-7da14.appspot.com/o/default%2Fp%2Fvideo-4.mp4?alt=media&token=a189e3d3-db1f-45bf-b96e-d7e506fc7f31'
        ],
        tags: ['p']
    },
    {
        id: 'b',
        name: 'b',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'stop',
                place: 'bilabial',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['b']
    },
    {
        id: 'm',
        name: 'm',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'nasal',
                place: 'bilabial',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['m']
    },
    {
        id: 't',
        name: 't',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'stop',
                place: 'alveolar',
                voicing: 'voiceless'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['t']
    },
    {
        id: 'd',
        name: 'd',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'stop',
                place: 'alveolar',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['d']
    },
    {
        id: 'n',
        name: 'n',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'nasal',
                place: 'alveolar',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['n']
    },
    {
        id: 'k',
        name: 'k',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'stop',
                place: 'velar',
                voicing: 'voiceless'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['k', 'c']
    },
    {
        id: 'g',
        name: 'g',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'stop',
                place: 'velar',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['g']
    },
    {
        id: 'ŋ',
        name: 'ŋ',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'nasal',
                place: 'velar',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ng']
    },
    {
        id: 'f',
        name: 'f',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'fricative',
                place: 'labiodental',
                voicing: 'voiceless'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['f']
    },
    {
        id: 'v',
        name: 'v',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'fricative',
                place: 'labiodental',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['v']
    },
    {
        id: 's',
        name: 's',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'fricative',
                place: 'alveolar',
                voicing: 'voiceless'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['s']
    },
    {
        id: 'z',
        name: 'z',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'fricative',
                place: 'alveolar',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['z']
    },
    {
        id: 'θ',
        name: 'θ',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'fricative',
                place: 'dental',
                voicing: 'voiceless'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['th']
    },
    {
        id: 'ð',
        name: 'ð',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'fricative',
                place: 'dental',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['th']
    },
    {
        id: 'ʃ',
        name: 'ʃ',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'fricative',
                place: 'post-alveolar',
                voicing: 'voiceless'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['sh']
    },
    {
        id: 'ʒ',
        name: 'ʒ',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'fricative',
                place: 'post-alveolar',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['zz', 'dj']
    },
    {
        id: 'tʃ',
        name: 'tʃ',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'affricate',
                place: 'post-alveolar',
                voicing: 'voiceless'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ch']
    },
    {
        id: 'dʒ',
        name: 'dʒ',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'affricate',
                place: 'post-alveolar',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['dz']
    },
    {
        id: 'l',
        name: 'l',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'lateral',
                place: 'alveolar',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['l']
    },
    {
        id: 'r',
        name: 'r',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'approximant',
                place: 'post-alveolar',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['r']
    },
    {
        id: 'j',
        name: 'j',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'approximant',
                place: 'palatal',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['j']
    },
    {
        id: 'w',
        name: 'w',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'approximant',
                place: 'bilabial',
                voicing: 'voiced'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['w']
    },
    {
        id: 'h',
        name: 'h',
        examples: ['Jack', 'judge'],
        type: {
            name: 'consonant',
            features: {
                manner: 'fricative',
                place: 'glottal',
                voicing: 'voiceless'
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['h']
    },
    // vowels - monothongs
    {
        id: "tense-i",
        name: "i:",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'high',
                front_back: 'front',
                open_close: 'close',
                rounding: 'unrounded',
                tensity: 'tense',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        examples: ["It's free"],
        tags: ['ee', 'ea']
    },
    {
        id: "lax-i",
        name: "ɪ",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'mid-high',
                front_back: 'front',
                open_close: 'close-mid',
                rounding: 'unrounded',
                tensity: 'lax',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['i']
    },
    {
        id: "e",
        name: "e",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'mid',
                front_back: 'front',
                open_close: 'mid',
                rounding: 'unrounded',
                tensity: 'lax',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['e']
    },
    {
        id: "ae",
        name: "æ",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'low',
                front_back: 'front',
                open_close: 'open',
                rounding: 'unrounded',
                tensity: 'lax',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ae']
    },
    {
        id: "tense-u",
        name: "u:",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'high',
                front_back: 'back',
                open_close: 'close',
                rounding: 'rounded',
                tensity: 'tense',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['uu']
    },
    {
        id: "lax-u",
        name: "ʊ",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'mid-high',
                front_back: 'back',
                open_close: 'close-mid',
                rounding: 'rounded',
                tensity: 'lax',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['u']
    },
    {
        id: "a",
        name: "ʌ",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'mid-low',
                front_back: 'central',
                open_close: 'open-mid',
                rounding: 'unrounded',
                tensity: 'lax',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['a', '^']
    },
    {
        id: "tense-o",
        name: "ɔ:",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'mid-high',
                front_back: 'back',
                open_close: 'close-mid',
                rounding: 'rounded',
                tensity: 'tense',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['oo']
    },
    {
        id: "lax-o",
        name: "ɔ:",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'mid-low',
                front_back: 'back',
                open_close: 'open-mid',
                rounding: 'rounded',
                tensity: 'lax',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['o']
    },
    {
        id: "ar",
        name: "ɑ:",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'low',
                front_back: 'back',
                open_close: 'open',
                rounding: 'unrounded',
                tensity: 'tense',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['aa']
    },
    {
        id: "ur",
        name: "ə",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'mid',
                front_back: 'central',
                open_close: 'mid',
                rounding: 'unrounded',
                tensity: 'lax',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ur', 'er']
    },
    {
        id: "urr",
        name: "ɜː",
        type: {
            name: "vowel",
            isDipthong: false,
            features: {
                height: 'mid',
                front_back: 'central',
                open_close: 'mid',
                rounding: 'unrounded',
                tensity: 'tense',
                centering: false,
                closing: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['err', 'urr']
    },
    // vowels - dipthongs
    {
        id: "ie",
        name: "ɪə",
        type: {
            name: "vowel",
            isDipthong: true,
            features: {
                height: '',
                front_back: '',
                open_close: '',
                rounding: '',
                tensity: '',
                closing: false,
                centering: true,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ie']
    },
    {
        id: "ea",
        name: "eə",
        type: {
            name: "vowel",
            isDipthong: true,
            features: {
                height: '',
                front_back: '',
                open_close: '',
                rounding: '',
                tensity: '',
                closing: false,
                centering: true,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ea']
    },
    {
        id: "ua",
        name: "ʊə",
        type: {
            name: "vowel",
            isDipthong: true,
            features: {
                height: '',
                front_back: '',
                open_close: '',
                rounding: '',
                tensity: '',
                closing: false,
                centering: true,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ua']
    },
    {
        id: "ei",
        name: "eɪ",
        type: {
            name: "vowel",
            isDipthong: true,
            features: {
                height: '',
                front_back: '',
                open_close: '',
                rounding: '',
                tensity: '',
                closing: true,
                centering: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ay', 'ei']
    },
    {
        id: "oi",
        name: "ɔɪ",
        type: {
            name: "vowel",
            isDipthong: true,
            features: {
                height: '',
                front_back: '',
                open_close: '',
                rounding: '',
                tensity: '',
                closing: true,
                centering: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['oi']
    },
    {
        id: "ai",
        name: "aɪ",
        type: {
            name: "vowel",
            isDipthong: true,
            features: {
                height: '',
                front_back: '',
                open_close: '',
                rounding: '',
                tensity: '',
                closing: true,
                centering: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ai']
    },
    {
        id: "eou",
        name: "əʊ",
        type: {
            name: "vowel",
            isDipthong: true,
            features: {
                height: '',
                front_back: '',
                open_close: '',
                rounding: '',
                tensity: '',
                closing: true,
                centering: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['ou']
    },
    {
        id: "aou",
        name: "aʊ",
        type: {
            name: "vowel",
            isDipthong: true,
            features: {
                height: '',
                front_back: '',
                open_close: '',
                rounding: '',
                tensity: '',
                closing: true,
                centering: false,
            }
        },
        links: [
            '', '', '', ''
        ],
        tags: ['au', 'ao']
    },
]

export default IPA_SOUNDS