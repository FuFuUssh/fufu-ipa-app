import React from 'react'
import '../styles/DashboardStyle.css'
import Card from './Card'
import IPA_SOUNDS from '../data'
import { useSelector } from 'react-redux'
import ToastsContainer from './ToastContainer'

export default function Dashboard() {
    const filters = useSelector(state => state.filters)
    let consonants = IPA_SOUNDS.filter(sound => sound.type.name === 'consonant')
    let vowels = IPA_SOUNDS.filter(sound => sound.type.name === 'vowel')

    const searchedSounds = filters.searchedSounds
    const wordType = filters.selectedType
    const vowelSubType = filters.selectedSubType
    const dipthongValue = filters.dipthongValue


    const allConsonants = IPA_SOUNDS.filter(sound => sound.type.name === 'consonant')
    const allVowels = IPA_SOUNDS.filter(sound => sound.type.name === 'vowel')
    const allMonothongs = allVowels.filter(sound => !sound.type.isDipthong)
    const allDipthongs = allVowels.filter(sound => sound.type.isDipthong)

    if (wordType === 'consonant') {
        if (filters.consonant.manner !== '' ) {
            consonants = consonants.filter(consonant => consonant.type.features.manner.toLowerCase() === filters.consonant.manner.toLowerCase())
        }
        if (filters.consonant.place !== '') {
            consonants = consonants.filter(consonant => consonant.type.features.place.toLowerCase() === filters.consonant.place.toLowerCase())
        }
        if (filters.consonant.voicing !== '') {
            consonants = consonants.filter(consonant => consonant.type.features.voicing.toLowerCase() === filters.consonant.voicing.toLowerCase())
        }
    } else if (wordType === 'vowel' && vowelSubType === 'monothong') {
        if (filters.vowel.height !== '') {
            vowels = vowels.filter(vowel => vowel.type.features.height.toLowerCase() === filters.vowel.height.toLowerCase())
        }
        if (filters.vowel.front_back !== '') {
            vowels = vowels.filter(vowel => vowel.type.features.front_back.toLowerCase() === filters.vowel.front_back.toLowerCase())
        }
        if (filters.vowel.open_close !== '') {
            vowels = vowels.filter(vowel => vowel.type.features.open_close.toLowerCase() === filters.vowel.open_close.toLowerCase())
        } 
        if (filters.vowel.rounding !== '') {
            vowels = vowels.filter(vowel => vowel.type.features.rounding.toLowerCase() === filters.vowel.rounding.toLowerCase())
        }
        if (filters.vowel.tensity !== '') {
            vowels = vowels.filter(vowel => vowel.type.features.tensity.toLowerCase() === filters.vowel.tensity.toLowerCase())
        }  
    } else if (wordType === 'vowel' && vowelSubType === 'dipthong') {
        vowels = vowels.filter(vowel => vowel.type.features[dipthongValue])
    }
    
    let soundsToShow

    if (wordType !== 'all') {
        soundsToShow = wordType === 'vowel' ? vowels : consonants
    } else {
        soundsToShow = IPA_SOUNDS
    }


    return (
        <section className='dashboard'>
                {(wordType === 'consonant' || (wordType === 'vowel' && soundsToShow.length < allVowels.length)) && searchedSounds.length === 0  && (
                    <div className="cards-container">
                        {soundsToShow.map((sound, index) => (
                            <Card key={`card_${index}`} soundId={sound.id} name={sound.name} examples={sound.examples} links={sound.links}/>
                        ))}
                    </div>
                )}
                {wordType === 'vowel' && soundsToShow.length === allVowels.length && searchedSounds.length === 0  && (
                    <>
                        <h3 className="words-type-container">
                            <span className="words-type">Monothongs</span> 
                            <span className="seperator"/>
                        </h3>
                        <div className="cards-container all">
                            {allMonothongs.map((monothong, index) => ( 
                                <Card key={`consonant_${index}`} soundId={monothong.id} name={monothong.name} examples={monothong.examples} links={monothong.links} />
                            ))}
                        </div>
                        <h3 className="words-type-container">
                            <span className="words-type">Dipthongs</span>  
                            <span className="seperator"/>
                        </h3>
                        <div className="cards-container all">
                            {allDipthongs.map((dipthong, index) => (
                                <Card key={`vowel_${index}`} soundId={dipthong.id} name={dipthong.name} examples={dipthong.examples} links={dipthong.links} />
                            ))}
                        </div>
                    </>
                )}
                {wordType === 'all' && searchedSounds.length === 0  && (
                    <>
                        <h3 className="words-type-container">
                            <span className="words-type">Consonants</span> 
                            <span className="seperator"/>
                        </h3>
                        <div className="cards-container all">
                            {allConsonants.map((consonant, index) => ( 
                                <Card key={`consonant_${index}`} soundId={consonant.id} name={consonant.name} examples={consonant.examples} links={consonant.links} />
                            ))}
                        </div>
                        <h3 className="words-type-container">
                            <span className="words-type">Vowels</span>  
                            <span className="seperator"/>
                        </h3>
                        <div className="cards-container all">
                            {allVowels.map((vowel, index) => (
                                <Card key={`vowel_${index}`} soundId={vowel.id} name={vowel.name} examples={vowel.examples} links={vowel.links} />
                            ))}
                        </div>
                    </>
                )}
                {searchedSounds.length > 0 && (
                    <div className="cards-container">
                    {searchedSounds.map((sound, index) => (
                        <Card key={`card_${index}`} soundId={sound.id} name={sound.name} examples={sound.examples} links={sound.links}/>
                    ))}
                </div>
                )}
            <ToastsContainer />
        </section>
    )
}
