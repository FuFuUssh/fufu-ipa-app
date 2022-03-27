import React from 'react'
import NyanIPA from '../assets/nyan-ipa.png'
import '../styles/HeaderStyle.css'
import FilterBar from './FilterBar'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../redux/actions/userActions'
import SearchBar from './SearchBar'
import ProfileButtons from './ProfileButtons'

export default function Header({ filterBarOpen, setFilterBarOpen }) {
    const currentUser = useSelector(state => state.userStatus.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleLogout() {
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
                <div className="profile-btns-container">
                    {currentUser?.uid 
                        ? (<ProfileButtons handleLogout={handleLogout} />)
                        : (<Link to="/login" className="profile-text">Log In</Link>)
                    }
                </div>
                {/* <Link to={currentUser ? '/' : '/login'} className="profile-container" onClick={handleProfileClick}>
                    
                </Link> */}
            </header>
            <FilterBar filterBarOpen={filterBarOpen} setFilterBarOpen={setFilterBarOpen} />
        </>
        
    )
}
