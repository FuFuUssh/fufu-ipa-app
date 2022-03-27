import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NyanIPA from '../../assets/nyan-ipa.png'
import '../../styles/ProfileStyle.css'
import { Link, useNavigate } from 'react-router-dom'
import { logOut, updateProfilePhoto } from '../../redux/actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const IMAGE_EXTENSTIONS = ['image/jpeg', 'image/jpg', 'image/png']

export default function Profile() {
    const userStatus = useSelector(state => state.userStatus)
    const imageInputRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, currentUser, profile } = userStatus
    console.log(profile)
    function handleUploadImageClick() {
        imageInputRef.current.click()
    }

    function handleImageUpload(e) {
        const image = e.target.files[0]
        if (!IMAGE_EXTENSTIONS.includes(image.type)) return alert('Please choose a valid image file to upload')
        if (!currentUser?.uid) return
        dispatch(updateProfilePhoto(currentUser.uid, image))
    }

    function handleUpdateProfileClick() {
        dispatch(logOut()).then(() => navigate('/confirm-account'))
    }

    return (
        <div className="auth-section profile-page">
            <div className="logo-container">
                <img className="nyan-ipa-logo" src={NyanIPA} alt="Nyan IPA Logo" />
            </div>
            <div className="card profile-card">
                <div className="card-left-side">
                    <div className="profile-image-container" onClick={handleUploadImageClick}>
                        <input type="file" hidden={true} ref={imageInputRef} onChange={handleImageUpload} />
                        <div className="profile-image">
                            {currentUser?.photoURL 
                                ? (
                                    <img src={currentUser.photoURL} alt={currentUser?.email} />
                                ) 
                                : (
                                    <div className="plus-container">+</div>
                                )}
                        </div>
                    </div>
                    <div className="profile-text-container">
                        <h3 className="profile-text">{currentUser?.displayName ? currentUser.displayName : 'Anonymous'}</h3>
                        <h3 className="profile-text">{currentUser?.email}</h3>
                    </div>
                    <div className="profile-btn-grid">
                        <button className="update-profile-btn profile-btn" onClick={handleUpdateProfileClick}>Update Profile</button>
                        <Link to="/"><button className="profile auth-back-btn profile-btn">Dashboard</button></Link>
                    </div>
                </div>
                <div className="card-right-side">
                    <div className="info-box">
                        <h3 className="info-box-title">Uploaded Video:</h3>
                        <span className="info-box-text">23</span>
                    </div>
                    <div className="info-box">
                        <h3 className="info-box-title">Workplace:</h3>
                        <span className="info-box-text">{profile?.workplace ? profile.workplace : ''}</span>
                    </div>
                    <div className="info-box">
                        <h3 className="info-box-title">Job Title</h3>
                        <span className="info-box-text">{profile?.job ? profile.job : ''}</span>
                    </div>
                </div>
            </div> 
            {loading && 
                <div className="spinner-container">
                    <FontAwesomeIcon className="spinner" icon={faSpinner} />
                </div>}
        </div>
    )
}
