import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import Toast from './Toast'
import '../styles/ToastStyle.css'

export default function ToastsContainer() {
    const toasts = useSelector(state => state.toasts)

    return (
        <>
            {toasts && ReactDOM.createPortal(
                <div className="toasts-container" id="toasts-container">
                    {toasts.map((toast, index) => (
                        <Toast key={`toast_${index}`} title={toast.title} progress={toast.progress} error={toast.error} />
                    ))}
                </div>,
                document.getElementById('root')
            )}
        </>
    )
}
