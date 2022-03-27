import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function ProfileButtons({ handleLogout }) {
    const [showButtons, setShowButtons] = useState(false)

    useEffect(() => {
        if (!showButtons) return 
        window.addEventListener('click', hideProfileButtons)

        return () => window.removeEventListener('click', hideProfileButtons)
    }, [showButtons])

    function hideProfileButtons(e) {
        if (e.target.closest('[data-profile-dropdown]') == null) setShowButtons(false) 
    }

    function handleProfileClick() {
        setShowButtons(prevShowButtons => !prevShowButtons)
    }

    return (
        <div className="profile-dropdown-btn" onClick={handleProfileClick}>
            <FontAwesomeIcon className="profile-icon" icon={faUserCircle} />
            <div className={`profile-dropdown ${showButtons ? 'active' : ''}`} data-profile-dropdown>
                <Link to="/profile"><button className="profile-btn">Profile</button></Link>
                <button className="profile-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
