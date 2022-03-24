import React from 'react'
import NyanIPA from '../assets/nyan-ipa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import '../styles/HeaderStyle.css'
import FilterBar from './FilterBar'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../redux/actions/userActions'
import SearchBar from './SearchBar'

export default function Header({ filterBarOpen, setFilterBarOpen }) {
    const currentUser = useSelector(state => state.userStatus.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleProfileClick() {
        if (currentUser) {
            dispatch(logOut())
        } 
        navigate('/login')
    }

    return (
        <>
            <header className='header'>
                <div className="logo-container">
                    <img className="nyan-ipa-logo" src={NyanIPA} alt="Nyan IPA Logo" />
                </div>
                <SearchBar />
                <Link to={currentUser ? '/' : '/login'} className="profile-container" onClick={handleProfileClick}>
                    <FontAwesomeIcon className="profile-icon" icon={faUserCircle} />
                    <span className="profile-text">{currentUser?.uid ? 'Log out': 'Log in'}</span>
                </Link>
            </header>
            <FilterBar filterBarOpen={filterBarOpen} setFilterBarOpen={setFilterBarOpen} />
        </>
        
    )
}
