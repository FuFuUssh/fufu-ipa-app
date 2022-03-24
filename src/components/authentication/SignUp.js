import React, { useEffect, useRef, useState } from 'react'
import NyanIPA from '../../assets/nyan-ipa.png'
import '../../styles/SignUpStyle.css'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const userStatus = useSelector(state => state.userStatus)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [signUpError, setSignUpError] = useState('')

    const { loading, error, currentUser } = userStatus

    useEffect(() => {
        if (!currentUser) return
        navigate('/')
    }, [currentUser, navigate])

    function handleCreateAccount(e) {
        e.preventDefault()
        
        if (passwordRef.current.value !== passwordConfirmRef.current.value) return setSignUpError('Passwords do not match')
        if (passwordRef.current.value.length < 6 || passwordRef.current.value > 20) return setSignUpError('Password must be between 6 and 20 characters')

        dispatch(signUp(emailRef.current.value, passwordRef.current.value))

    }

    return (
        <div className="auth-section">
            <div className="logo-container">
                <img className="nyan-ipa-logo" src={NyanIPA} alt="Nyan IPA Logo" />
            </div>
            <form className="form card" onSubmit={handleCreateAccount}>
                <h2 className="form-title">Sign Up</h2>
                {error && <p className="error-box">{error}</p>}
                {signUpError && <p className="error-box">{signUpError}</p>}
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" ref={emailRef} required={true}/>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" ref={passwordRef} required={true}/>
                </div>
                <div className="form-group">
                    <label htmlFor='passwordConfirm'>Confirm Password:</label>
                    <input type="password" id="passwordConfirm" placeholder="Confirm your password" ref={passwordConfirmRef} required={true}/>
                </div>
                <button className="form-submit-btn" type="submit" disabled={loading}>Create Account</button>
            </form>
            {loading && 
                <div className="spinner-container">
                    <FontAwesomeIcon className="spinner" icon={faSpinner} />
                </div>}
        </div>
    )
}
