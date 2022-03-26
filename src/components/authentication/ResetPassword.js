import React, { useRef, useEffect } from 'react'
import NyanIPA from '../../assets/nyan-ipa.png'
import '../../styles/SignUpStyle.css'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, resetMessage } from '../../redux/actions/userActions'
import { Link } from 'react-router-dom'

export default function ResetPassword() {
    const userStatus = useSelector(state => state.userStatus)
    const dispatch = useDispatch()

    const emailRef = useRef()
    const { loading, error, message } = userStatus
    console.log(loading, message)
    useEffect(() => {
        return () => dispatch(resetMessage())
    }, [dispatch])

    function handleLogin(e) {
        e.preventDefault()
        
        dispatch(resetPassword(emailRef.current.value))
    }

    return (
        <div className="auth-section">
            <div className="logo-container">
                <img className="nyan-ipa-logo" src={NyanIPA} alt="Nyan IPA Logo" />
            </div>
            <form className="form card" onSubmit={handleLogin}>
                <h2 className="form-title">Reset Password</h2>
                {message && <p className="message-box">{message}</p>}
                {error && <p className="error-box">{error}</p>}
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" ref={emailRef} required={true}/>
                </div>
                <button className="form-submit-btn" type="submit" disabled={loading || message !== ''}>Reset Now</button>
                <p className='sub-text'>Remember your account? <Link to="/login" className="nav-link">Login</Link></p>
            </form>
            {loading && 
                <div className="spinner-container">
                    <FontAwesomeIcon className="spinner" icon={faSpinner} />
                </div>}
        </div>
    )
}
