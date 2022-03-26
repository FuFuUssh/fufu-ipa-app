import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../styles/CardStyle.css'
import Modal from './Modal'

export default function Card({ soundId, name, examples, links}) {
    const [openModal, setOpenModal] = useState(false)
    const { lettersToMark, words } = examples

    function handleCardClick(e) {
        if (e.target.closest('.ipa-card-container') != null) {
            setOpenModal(true)
        }
    }

    function closeModal() {
        setOpenModal(false)
    }

    return (
        <div className="ipa-card-container" onClick={handleCardClick}>
            <div className="ipa-card card">
                <div className="card-front">/{name}/</div>
                <div className="card-back">
                    <div className="examples-container">
                        {words?.map((word, wordIndex) => {
                        const letters = word.split('')
                            return <div className="word" key={`word_${word}_${wordIndex}`}>
                                {letters.map((letter, index) => {
                                    if (
                                            lettersToMark.includes(letter) 
                                            || lettersToMark.includes(word.substring(index, index + 2)) 
                                            || lettersToMark.includes(word.substring(index - 1, index + 1))
                                            || lettersToMark.includes(word.substring(index , index + 3))
                                            || lettersToMark.includes(word.substring(index - 1, index + 2))
                                            || lettersToMark.includes(word.substring(index - 2, index + 1))    
                                        ) {
                                        return (
                                            <span key={`letter_mark_${letter}_${index}`}>
                                                {wordIndex !== 0 && index === 0 && <span>, </span>}
                                                <span className="marked">
                                                    {letter}
                                                </span>
                                            </span>)
                                    } else {
                                        return (
                                        <span key={`letter_mark_${letter}_${index}`}>
                                            {wordIndex !== 0 && index === 0 && <span>, </span>}
                                            <span  className="char">
                                                {letter}
                                            </span>
                                        </span>)
                                    }
                                })}
                            </div>
                        })}
                    </div>
                </div>
            </div>
            {openModal && ReactDOM.createPortal(
                <Modal soundId={soundId} name={name} links={links} closeModal={closeModal} />,
                document.getElementById('root')
            )}
        </div>
    )
}
