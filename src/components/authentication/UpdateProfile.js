import React, { useEffect, useRef, useState } from 'react'
import NyanIPA from '../../assets/nyan-ipa.png'
import '../../styles/SignUpStyle.css'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { reserUpdateMessagesAndErrors, updateProfileEmail, updateProfileJob, updateProfileName, updateProfilePassword, updateProfileWorkplace } from '../../redux/actions/userActions'
import { Link } from 'react-router-dom'

export default function UpdateProfile() {
    const userStatus = useSelector(state => state.userStatus)
    const dispatch = useDispatch()

    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const workplaceRef = useRef()
    const jobRef = useRef()

    const [updateProfileError, setUpdateProfileError] = useState('')

    const { loading, currentUser, profile, updateMessages, updateErrors } = userStatus
    const errors = Object.keys(updateErrors).map(key => updateErrors[key]).filter(error => error !== '')
    const messages = Object.keys(updateMessages).map(key => updateMessages[key]).filter(message => message !== '')
    console.log(errors, messages)
    useEffect(() => {
        return () => dispatch(reserUpdateMessagesAndErrors())
    }, [dispatch])

    function handleUpdateProfile(e) {
        e.preventDefault()
        
        if (passwordRef.current.value !== passwordConfirmRef.current.value) return setUpdateProfileError('Passwords do not match')
        if (passwordRef.current.value.length > 0) {
            if (passwordRef.current.value.length < 6 || passwordRef.current.value > 20) { 
                setUpdateProfileError('Password must be between 6 and 20 characters')
            } else {
                dispatch(updateProfilePassword(passwordRef.current.value))
            }
        }

        if ((usernameRef.current.value !== '' || usernameRef.current.value !== null) && usernameRef.current.value !== currentUser.displayName) dispatch(updateProfileName(usernameRef.current.value))
        if (emailRef.current.value !== currentUser.email) dispatch(updateProfileEmail(emailRef.current.value))
        if (workplaceRef.current.value !== profile.workplace) dispatch(updateProfileWorkplace(currentUser?.uid, workplaceRef.current.value))
        if (jobRef.current.value !== profile.job) dispatch(updateProfileJob(currentUser?.uid, jobRef.current.value))
    }
    
    return (
        <div className="auth-section">
            <div className="logo-container">
                <img className="nyan-ipa-logo" src={NyanIPA} alt="Nyan IPA Logo" />
            </div>
            <form className="form card" onSubmit={handleUpdateProfile}>
                <h2 className="form-title">Update Profile</h2>
                <h5 className="form-subtitle">You can only update either email or password at a time</h5>
                {updateProfileError && <p className="error-box">{updateProfileError}</p>}
                {messages.length > 0 && (
                    <div className="message-box">
                        {messages.map((message, index) => (
                            <p key={`success_${index}`}>{message}</p>
                        ))}
                    </div>
                )}
                {errors.length > 0 && (
                    <div className="error-box">
                        {errors.map((error, index) => (
                            <p key={`error_${index}`}>{error}</p>
                        ))}
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor='username'>Username:</label>
                    <input type="text" id="username" placeholder="Enter your name" ref={usernameRef} defaultValue={currentUser?.displayName ? currentUser.displayName : ''}/>
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type="email" id="email" placeholder="Enter your new email" ref={emailRef} defaultValue={currentUser?.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" id="password" placeholder="Leave blank to remain previous password" ref={passwordRef} />
                </div>
                <div className="form-group">
                    <label htmlFor='passwordConfirm'>Confirm Password:</label>
                    <input type="password" id="passwordConfirm" placeholder="Leave blank to remain previous password" ref={passwordConfirmRef} />
                </div>
                <div className="form-group workplace-and-job">
                    <label htmlFor='workplace'>Your Workplace</label>
                    <input type="text" id="workplace" placeholder="Enter your workplace" ref={workplaceRef} defaultValue={profile?.workplace ? profile.workplace : ''} />
                </div>
                <div className="form-group workplace-and-job">
                    <label htmlFor='job-title'>Your Job Title</label>
                    <input type="text" id="job-title" placeholder="Enter your job title" ref={jobRef} defaultValue={profile?.job ? profile.job : ''} />
                </div>
                <button className="form-submit-btn" type="submit" disabled={loading || messages.length}>Update Profile</button>
                <p className="sub-text">Change your mind? <Link to="/profile" className="nav-link">Back to profile</Link></p>
            </form>
            {loading && 
                <div className="spinner-container">
                    <FontAwesomeIcon className="spinner" icon={faSpinner} />
                </div>}
        </div>
    )
}
