import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { searchSound } from '../redux/actions/filterActions'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')

    const dispatch = useDispatch()
    function handleSearchChange(e) {
        setSearchTerm(e.target.value)
        dispatch(searchSound(e.target.value))
    }

    return (
        <>
            <form className="search-bar-container">
                <div className="custom-search-bar">
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <input className="search-bar-input" type="text" value={searchTerm} onChange={handleSearchChange}/>
                </div>
            </form>
        </>
    )
}
