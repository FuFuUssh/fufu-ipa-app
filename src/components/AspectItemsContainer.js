import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectConsonant, selectVowel } from '../redux/actions/filterActions'

export default function AspectItemsContainer({ items, category, wordType, subType, resetClickCount, color, type }) {
    const [selectedItem, setSelectedItem] = useState()
    const dispatch = useDispatch()
    const isDipthong = subType === 'dipthong'

    function handleItemClick(e) {
        const currentSelectedItem = e.target.closest('li').dataset.item
        if (currentSelectedItem === selectedItem) return setSelectedItem('')
        setSelectedItem(currentSelectedItem)
    }

    useEffect(() => {
        if (selectedItem == null) return
        if (wordType === 'consonant') {
            return dispatch(selectConsonant(category, selectedItem))
        } 
        if (wordType === 'vowel') {
            return dispatch(selectVowel(category, selectedItem, isDipthong))
        }
    }, [dispatch, selectedItem, category, isDipthong, wordType])

    useEffect(() => {
        setSelectedItem(null)
    }, [resetClickCount])

    return (
        <ul className={`aspect-items ${color} ${type}`}>
            {items.map((item, index) => {
                return <li 
                        className={`aspect-item ${selectedItem === item ? 'selected' : ''}`} 
                        key={`item_${index}`} 
                        data-item={item}>
                            <button 
                                onClick={handleItemClick}
                            >{ item }
                            </button>
                        </li>
            })}
        </ul>
    )
}
