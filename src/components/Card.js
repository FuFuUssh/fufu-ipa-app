import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../styles/CardStyle.css'
import Modal from './Modal'

export default function Card({ soundId, name, examples, links}) {
    const [openModal, setOpenModal] = useState(false)

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
                    {examples?.map((example, index) => {
                        return <p className="card-example" key={`example_${index}`}>{example}</p>
                    })}
                </div>
            </div>
            {openModal && ReactDOM.createPortal(
                <Modal soundId={soundId} name={name} links={links} closeModal={closeModal} />,
                document.getElementById('root')
            )}
        </div>
    )
}
