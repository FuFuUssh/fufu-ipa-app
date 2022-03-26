import React, { useEffect, useRef, useState } from 'react'
import NyanIPA from '../../assets/nyan-ipa.png'
import '../../styles/SignUpStyle.css'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../../redux/actions/userActions'
import { Link, useNavigate } from 'react-router-dom'

export default function LogIn() {
    const userStatus = useSelector(state => state.userStatus)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()
    const [logInError, setLogInError] = useState('')

    const { loading, error, currentUser } = userStatus

    useEffect(() => {
        if (!currentUser) return
        navigate('/')
    }, [currentUser, navigate])

    function handleLogin(e) {
        e.preventDefault()
        
        if (passwordRef.current.value === 0) setLogInError('Please enter your password')
        dispatch(logIn(emailRef.current.value, passwordRef.current.value))
    }

    return (
        <div className="auth-section">
            <div className="logo-container">
                <img className="nyan-ipa-logo" src={NyanIPA} alt="Nyan IPA Logo" />
            </div>
            <form className="form card" onSubmit={handleLogin}>
                <h2 className="form-title">Welcome back!</h2>
                {error && <p className="error-box">{error}</p>}
                {logInError && <p className="error-box">{logInError}</p>}
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" ref={emailRef} required={true}/>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" ref={passwordRef} required={true}/>
                </div>
                <button className="form-submit-btn" type="submit" disabled={loading}>Log In</button>
                <p className='sub-text'>Forgot your password? <Link to="/reset-password" className="nav-link">Reset now</Link></p>
            </form>
            <p className='sub-text outside-form'>Don't have an account? <Link to="/signup" className="nav-link">Signup</Link></p>
            {loading && 
                <div className="spinner-container">
                    <FontAwesomeIcon className="spinner" icon={faSpinner} />
                </div>}
        </div>
    )
}
