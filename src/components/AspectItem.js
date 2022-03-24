import React, { useState } from 'react'

export default function AspectItem({ title }) {
    const [selected, setSelected] = useState(false)

    function handleAspectItemClick() {
        setSelected(prevSelected => !prevSelected)
    }

    return (
        <li 
            className={`aspect-item ${selected ? 'selected' : ''}`} 
            onClick={handleAspectItemClick}
        >
            <button>{ title }</button>
        </li>
    )
}
