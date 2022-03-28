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
           'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fp%2Fvideo-1.mp4?alt=media&token=36219ede-dfcb-4806-bb3c-bf0619d777a5',
           'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fp%2Fvideo-2.mp4?alt=media&token=f112c9a4-ef11-4dc8-87e6-c5eba8de7e18',
           'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fp%2Fvideo-3.mp4?alt=media&token=38b9e776-ed02-468f-b2a6-52b647f8436d',
           'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fp%2Fvideo-4.mp4?alt=media&token=96e3f8bf-e9e2-466f-992f-7f0ed8f43494'
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fb%2Fvideo-1.mp4?alt=media&token=8f5fd252-1567-4721-86ef-ef1b5337f042', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fb%2Fvideo-2.mp4?alt=media&token=8ce7841d-fa61-4d81-af5f-a1667e04d064', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fb%2Fvideo-3.mp4?alt=media&token=b1781c5f-f56f-4c95-b3f5-3e04f309afc0', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fm%2Fvideo-1%20.mp4?alt=media&token=5772e4a1-d0a2-4b2b-8ed6-fddefe52b99a', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fm%2Fvideo-2.mp4?alt=media&token=fdf4d144-5d2b-4be4-a4cf-27af22a8a1fc', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fm%2Fvideo-3%20.mp4?alt=media&token=e07a05c1-822f-4469-9d95-c0a308d190b2', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Ft%2Fvideo-1%20.mp4?alt=media&token=6c393197-b209-481e-b644-b3dcdeec6cbc', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Ft%2Fvideo-2.mp4?alt=media&token=c1945517-dd68-4a29-96b8-b622273e7496', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Ft%2Fvideo-3%20.mp4?alt=media&token=8c8f7f4d-bd82-4c24-ab41-c99ff5f86bfd', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fd%2Fvideo-1.mp4?alt=media&token=b52d75b1-b0e7-4538-a0d0-7224fb1f5b02', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fd%2Fvideo-2.mp4?alt=media&token=6e010e4c-7789-41b4-aa7e-19f2ba8aa214', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fd%2Fvideo-3.mp4?alt=media&token=12096c58-f765-4d52-a491-bb8d8fb54b6b', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fn%2Fvideo-1%20.mp4?alt=media&token=aeae1fe4-d663-4cd2-a758-026b9e5c9a29', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fn%2Fvideo-2.mp4?alt=media&token=4d912d07-c888-46ac-bdb7-d71de9c5ce68', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fn%2Fvideo-3%20.mp4?alt=media&token=3cb8b058-7a71-4447-b94c-468195c800d4', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fk%2Fvideo-1.mp4?alt=media&token=359ca71f-6f26-4494-a1b2-f2a4f47f25a1', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fk%2Fvideo-2.mp4?alt=media&token=65dbabdf-ab7f-405c-af66-715c0078b569', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fk%2Fvideo-3%20.mp4?alt=media&token=71e45ced-c97f-4feb-a58b-a0d39c506c01', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fg%2Fvideo-1%20.mp4?alt=media&token=727a2693-3867-4f29-9ed2-8516fa739b3f', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fg%2Fvideo-2.mp4?alt=media&token=51573be2-3131-4bc7-895b-a784cd9b3ec2', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fg%2Fvideo-3.mp4?alt=media&token=2f6a5d9b-2023-47a2-b7b2-f5176bd743ca', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2F%C5%8B%2Fvideo-1%20.mp4?alt=media&token=2fb07522-304b-47ba-a78c-6167dce47ca1', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2F%C5%8B%2Fvideo-2.mp4?alt=media&token=069f988d-01cb-49f9-948d-eaed7b4b5f12', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2F%C5%8B%2Fvideo-3%20.mp4?alt=media&token=801962ee-c48f-4bf2-8583-78c686901258', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Ff%2Fvideo-1.mp4?alt=media&token=e8a3ae02-053b-4822-82bd-3428fd399163', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Ff%2Fvideo-2.mp4?alt=media&token=5de630f6-6a47-46f2-8726-35f35bfadb9e', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Ff%2Fvideo-3%20.mp4?alt=media&token=8cc84e08-9d9c-4786-bc56-ec2378589677', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fv%2Fvideo-1%20.mp4?alt=media&token=10fb5c6a-2000-47c8-91fa-10e380f263e1', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fv%2Fvideo-2.mp4?alt=media&token=d96670d0-d71c-4aa4-a2bb-b1199136c17c', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fv%2Fvideo-3%20.mp4?alt=media&token=b5343b10-8da7-4f1a-a897-b5c4f830fdd9', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fs%2Fvideo-1%20.mp4?alt=media&token=7c137516-0922-4c46-aded-d471869b239b', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fs%2Fvideo-3%20.mp4?alt=media&token=5dab822c-0713-4662-836f-c88b2009fca0', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fz%2Fvideo-1.mp4?alt=media&token=754eb700-0be5-4374-bbbd-c1d95c5a3484', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fz%2Fvideo-2.mp4?alt=media&token=1e99082d-a6a6-4235-8b89-d78a294b67eb', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fz%2Fvideo-3.mp4?alt=media&token=b6a807a8-9c67-43b3-ad75-da05dbf71e9e', 
            ''
        ],
        tags: ['z']
    },
    {
        id: 'th',
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2F%CE%B8%2Fvideo-1.mp4?alt=media&token=954ff5bc-4e3d-4bd9-9272-961ff4faea08', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2F%CE%B8%2Fvideo-2.mp4?alt=media&token=550e3b63-fab2-4f11-9da4-68f8be93723a', 
            '', 
            ''
        ],
        tags: ['th']
    },
    {
        id: 'dth',
        name: 'ð',
        examples: {
            lettersToMark: ['th', 'the'],
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2F%C3%B0%2Fvideo-1.mp4?alt=media&token=b0cd6a92-50e4-448c-8aab-7b9d2632dd67', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2F%CA%83%2Fvideo-1%20.mp4?alt=media&token=c98dc6be-36f3-44d1-b48a-876fef2c995f', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2F%CA%83%2Fvideo-3%20.mp4?alt=media&token=9fb9c4cc-466d-447b-b84f-46d7cacbb00b', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2F%CA%92%2Fvideo-1.mp4?alt=media&token=ff4ed3aa-899d-4e16-890f-0cec4c9c2e87', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Ft%CA%83%2Fvideo-1%20.mp4?alt=media&token=333b81b4-356b-4e1e-a0b7-0ed9dddec2a8', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Ft%CA%83%2Fvideo-3%20.mp4?alt=media&token=fc1039f2-c2b5-4450-8d1c-397844da8a63', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fd%CA%92%2Fvideo-1%20.mp4?alt=media&token=4861be62-d462-4d01-b820-821371304586', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fd%CA%92%2Fvideo-3.mp4?alt=media&token=3e52c0db-f1db-48d2-968d-756f34c0e230', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fl%2Fvideo-1%20.mp4?alt=media&token=585d1daf-1c66-41b5-ba71-323eff404510', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fl%2Fvideo-3%20.mp4?alt=media&token=b5fbc6b4-b9ab-4233-84ae-41f249bf4c81', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fr%2Fvideo-1%20.mp4?alt=media&token=37c9a9ec-2ef7-4981-9196-bd6bb8c7e112', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fr%2Fvideo-3%20.mp4?alt=media&token=9a70cbe3-b4b1-4138-ae77-e81397a0a241', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fj%2Fvideo-1.mp4?alt=media&token=f4fee7b0-ab31-4333-85b9-5a30579055eb', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fw%2Fvideo-1.mp4?alt=media&token=631c0bf6-bb9f-4787-914a-8ca15a66e3c9', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fw%2Fvideo-3%20.mp4?alt=media&token=b24d0429-1db0-45bf-980b-7ce35d045c8d', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fh%2Fvideo-1.mp4?alt=media&token=f83668a0-dbbc-4a4d-8434-20c709cc9857', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fconsonants%2Fh%2Fvideo-2.mp4?alt=media&token=580149f1-0e48-456a-b11c-ece10f701bfc', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2Fi%CB%90%2FVideo%201.mp4?alt=media&token=797aba5c-2553-40db-b487-dd0a3d02fef2', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2Fi%CB%90%2Fvideo-3.mp4?alt=media&token=00ed4875-e4bc-4978-b4cc-fb6d5567eb54', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%C9%AA%2Fvideo-1.mp4?alt=media&token=e7f03639-1627-47aa-83d8-543f22fd4db9', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%C9%AA%2Fvideo-3.mp4?alt=media&token=bb7c34a0-aedf-4a03-80f0-62cb2beeabe5', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2Fe%2Fvideo-1.mp4?alt=media&token=632728e9-24c4-4fa1-9634-46b1bb09ca0d', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2Fe%2Fvideo-3.mp4?alt=media&token=35ccbdb1-d398-489b-8d48-cde4d5cac5b4', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%C3%A6%2Fvideo-1.mp4?alt=media&token=6086c484-5643-40e5-a984-c824a33cac81', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2Fu%CB%90%2Fvideo-1.mp4?alt=media&token=b34e0902-6b27-4bff-9552-710b172be871', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%CA%8A%2Fvideo-1.mp4?alt=media&token=15eb4364-c31f-4e9d-abdd-29d4ea80fca1', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%CA%8C%2Fvideo-1.mp4?alt=media&token=3f6617ab-c190-4f37-ad12-09bc7adefa7c', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%CA%8C%2Fvideo-3.mp4?alt=media&token=5a47f5a7-5d2e-4ab8-a0ee-1fc75197be0c', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%C9%94%CB%90%2Fvideo-1.mp4?alt=media&token=ab9f2b02-1027-4012-862c-81b6edebb196', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%C9%92%2Fvideo-1.mp4?alt=media&token=77e50a24-7bef-4009-878f-5a60b3fbd5a1', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%C9%91%CB%90%2Fvideo-1.mp4?alt=media&token=2e401454-c4d8-488a-8225-efeec3bbdf13', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%C9%99%2Fvideo-1.mp4?alt=media&token=f7beea1b-3639-4505-99c5-8940e4fb1b58', 
            '', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%C9%99%2Fvideo-3.mp4?alt=media&token=436a42dd-5221-4564-b50a-63ff853ff1ce', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fmonothongs%2F%C9%9C%CB%90%2Fvideo-1.mp4?alt=media&token=c2070352-a93a-4d97-a320-3d58c970387c', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2F%C9%AA%C9%99%2Fvideo-1.mp4?alt=media&token=24575d9f-8f19-4f25-bd4c-138986c1a785', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2Fe%C9%99%2Fvideo-1.mp4?alt=media&token=fa3541aa-e0b9-433c-a78b-58d7dc6c624a', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2Fe%C9%99%2Fvideo-2.mp4?alt=media&token=b5640795-6e41-4b59-8448-df7b3e5d3376', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2F%CA%8A%C9%99%2Fvideo-1.mp4?alt=media&token=f18f79c8-6278-49c2-a044-df68f204503e', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2Fe%C9%AA%2Fvideo-1.mp4?alt=media&token=11404b0b-91f9-41ba-a655-aefc320c7a75', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2Fe%C9%AA%2Fvideo-2.mp4?alt=media&token=7cb8b245-e442-4b97-9e30-abe7491d9af1', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2F%C9%94%C9%AA%2Fvideo-1.mp4?alt=media&token=8d7bd011-50e1-4063-815f-07395b995533', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2Fa%C9%AA%2Fvideo-1.mp4?alt=media&token=dd724459-b3bd-45c3-8cfc-1030968b4358', 
            '', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2F%C9%99%CA%8A%2Fvideo-1.mp4?alt=media&token=136ad12b-2485-4c59-b97d-bb3e840084d2', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2F%C9%99%CA%8A%2Fvideo-2.mp4?alt=media&token=04ac1754-efa2-4a3c-9ebf-74302234b81b', 
            '', 
            ''
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
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2Fa%CA%8A%2Fvideo-1.mp4?alt=media&token=566013d8-93cc-450d-9490-d08a0a470165', 
            'https://firebasestorage.googleapis.com/v0/b/fuipa-c461d.appspot.com/o/default%2Fvowels%2Fdipthongs%2Fa%CA%8A%2Fvideo-2.mp4?alt=media&token=1caff842-1276-4841-8fc1-f6ed97297bba', 
            '', 
            ''
        ],
        examples: {
            lettersToMark: ['ou'],
            words: ['about', 'sound']
        },
        tags: ['au', 'ao']
    },
]

export default IPA_SOUNDS