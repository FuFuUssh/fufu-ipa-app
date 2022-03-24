import React, { useState } from 'react'

export default function Toast({ title, progress, error }) {
    const [show, setShow] = useState(true)

    function handleCloseToast() {
        setShow(false)
    }

    return (
        <div className={`toast card ${show ? 'show' : 'disappear'}`}>
            <div className="toast-header">
                <h3 className="toast-title">{title}</h3>
                {(error || progress === 100) && <button className="close-btn" onClick={handleCloseToast}>&times;</button>}
            </div>
            <div className="toast-content">
                <div className={`progress-bar ${error ? 'error' : ''}`}
                    data-progress={progress}
                >
                    {Math.floor(progress)}%
                </div>
            </div>
        </div>
    )
}
