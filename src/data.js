const IPA_SOUNDS = [
    //consonants
    {
        id: 'p',
        name: 'p',
        examples: {
            lettersToMark: ['p'],
            words: ['park', 'sport', 'shop']
        },
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
        examples: {
            lettersToMark: ['b'],
            words: ['boy', 'rob', 'brown']
        },
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
        examples: {
            lettersToMark: ['m'],
            words: ['man', 'stamp', 'came']
        },
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
        examples: {
            lettersToMark: ['t'],
            words: ['talk', 'strong', 'hot']
        },
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
        examples: {
            lettersToMark: ['d'],
            words: ['dog', 'bad']
        },
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
        examples: {
            lettersToMark: ['n'],
            words: ['nose', 'can', 'none']
        },
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
        examples: {
            lettersToMark: ['c', 'k'],
            words: ['call', 'shock', 'car']
        },
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
        examples: {
            lettersToMark: ['g'],
            words: ['go', 'bag', 'grey']
        },
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
        examples: {
            lettersToMark: ['ng', 'n'],
            words: ['thing', 'sing', 'sink']
        },
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
        examples: {
            lettersToMark: ['f'],
            words: ['fun', 'stuff']
        },
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
        examples: {
            lettersToMark: ['v'],
            words: ['van', 'give']
        },
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
        examples: {
            lettersToMark: ['s'],
            words: ['sing', 'kiss']
        },
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
        examples: {
            lettersToMark: ['z'],
            words: ['zoo', 'buzz']
        },
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
        examples: {
            lettersToMark: ['th'],
            words: ['throw', 'teeth']
        },
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
        examples: {
            lettersToMark: ['th'],
            words: ['that', 'bathe']
        },
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
        examples: {
            lettersToMark: ['sh'],
            words: ['sheep', 'dish']
        },
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
        examples: {
            lettersToMark: ['s', 'ge'],
            words: ['vision', 'garage']
        },
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
        examples: {
            lettersToMark: ['ch'],
            words: ['chicken', 'catch']
        },
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
        examples: {
            lettersToMark: ['ge', 'j'],
            words: ['advantage', 'joke']
        },
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
        examples: {
            lettersToMark: ['l', 'll'],
            words: ['log', 'tall']
        },
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
        examples: {
            lettersToMark: ['r'],
            words: ['rock', 'rain']
        },
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
        examples: {
            lettersToMark: ['y'],
            words: ['yolk', 'yellow']
        },
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
        examples: {
            lettersToMark: ['wh', 'w'],
            words: ['what', 'win']
        },
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
        examples: {
            lettersToMark: ['h'],
            words: ['hair', 'hot']
        },
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
        examples: {
            lettersToMark: ['ee', 'ea'],
            words: ['teen', 'bean']
        },
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
        examples: {
            lettersToMark: ['i'],
            words: ['bin', 'sink']
        },
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
        examples: {
            lettersToMark: ['e'],
            words: ['ten', 'ben']
        },
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
        examples: {
            lettersToMark: ['a'],
            words: ['can', 'hand']
        },
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
        examples: {
            lettersToMark: ['oo', 'oe'],
            words: ['shoot', 'shoe']
        },
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
        examples: {
            lettersToMark: ['oo', 'u'],
            words: ['foot', 'put']
        },
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
        examples: {
            lettersToMark: ['u'],
            words: ['but', 'sun']
        },
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
        examples: {
            lettersToMark: ['a', 'o'],
            words: ['tall', 'bore']
        },
        tags: ['oo']
    },
    {
        id: "lax-o",
        name: "ɒ",
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
        examples: {
            lettersToMark: ['o'],
            words: ['song', 'not']
        },
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
        examples: {
            lettersToMark: ['a'],
            words: ['car', 'bar']
        },
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
        examples: {
            lettersToMark: ['a', 'u'],
            words: ['ago', 'support']
        },
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
        examples: {
            lettersToMark: ['ur'],
            words: ['burn', 'turn']
        },
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
        examples: {
            lettersToMark: ['ea', 'ee'],
            words: ['tear', 'cheer']
        },
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
        examples: {
            lettersToMark: ['ea', 'a'],
            words: ['bear', 'care']
        },
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
        examples: {
            lettersToMark: ['ou', 'u'],
            words: ['tour', 'mature']
        },
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
        examples: {
            lettersToMark: ['a'],
            words: ['chase', 'case']
        },
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
        examples: {
            lettersToMark: ['oy', 'oi'],
            words: ['toy', 'boil']
        },
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
        examples: {
            lettersToMark: ['ey', 'uy'],
            words: ['eye', 'buy']
        },
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
        examples: {
            lettersToMark: ['ow', 'oa'],
            words: ['snow', 'boat']
        },
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
        examples: {
            lettersToMark: ['ou'],
            words: ['about', 'sound']
        },
        tags: ['au', 'ao']
    },
]

export default IPA_SOUNDS