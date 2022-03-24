import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { resetAllFilters, switchToAll, switchToConsonant, switchToVowel } from '../redux/actions/filterActions'
import '../styles/FilterBarStyle.css'
import AspectItemsContainer from './AspectItemsContainer'
import IPAChart from '../assets/ipa-chart.jpg'

const consonant_aspects_one = ['Stop', 'Fricative', 'Affricate', 'Nasal', 'Lateral', 'Approximant']
const consonant_aspects_two = ['Bilabial', 'Labiodental', 'Dental', 'Alveolar', 'Post-alveolar', 'Palatal', 'Velar', 'Glottal']
const consonant_aspects_three = ['Voiced', 'Voiceless']

const vowels_height = ['High', 'Mid-high', 'Mid', 'Mid-low', 'Low']
const vowels_front_back = ['Front', 'Central', 'Back']
const vowels_open_close = ['Close', 'Close-mid', 'Mid', 'Open-mid', 'Open']
const vowels_rounding = ['Rounded', 'Unrounded']
const vowels_tensity = ['Tense', 'Lax']
const dipthongs = ['Centering', 'Closing']

export default function FilterBar({ filterBarOpen, setFilterBarOpen }) {
    const [currentFilter, setCurrentFilter] = useState('all')
    const [currentVowelType, setCurrentVowelType] = useState('monothongs')
    const [resetClickCount, setResetClickCount] = useState(0)
    const [chartOpen, setChartOpen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (currentFilter === 'consonants') return dispatch(switchToConsonant())
        if (currentFilter === 'vowels') return dispatch(switchToVowel())
        dispatch(switchToAll())
    }, [currentFilter, dispatch])

    function handleFilterBarClick(e) {
        setFilterBarOpen(true)

        if (e.target.dataset.filter === currentFilter) return
        setCurrentFilter(e.target.dataset.filter)
        handleResetClick()
        setFilterBarOpen(true)
    }

    function closeFilterCard() {
        setFilterBarOpen(false)
    }

    function handleVowelTypeClick(e) {
        setCurrentVowelType(e.target.dataset.vowelType)
    }

    function handleResetClick() {
        setResetClickCount(prevCount => prevCount + 1)
        dispatch(resetAllFilters())
    }

    function showChart() {
        setChartOpen(true)
    }

    function hideChart() {
        setChartOpen(false)
    }

    function handleChartClick(e) {
        if (e.target.matches(".ipa-chart-outlayer")) {
            hideChart()
        }
    }

    return (
            <div className={`filter-bar ${filterBarOpen ? 'open' : ''}`} id="filter-bar">
                <div className="filters-container">
                    <button
                        className={`consonants filter-btn ${currentFilter === 'consonants' ? 'active' : ''}`}
                        data-filter="consonants" 
                        onClick={handleFilterBarClick}
                    >
                        Consonants
                    </button>
                    <button 
                        className={`vowels filter-btn ${currentFilter === 'vowels' ? 'active' : ''}`}
                        data-filter="vowels" 
                        onClick={handleFilterBarClick}
                    >
                        Vowels
                    </button>
                    <button 
                        className={`all filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
                        data-filter="all" 
                        onClick={handleFilterBarClick}
                    >
                        All
                    </button>
                </div>
                <div className="sub-btn-grids">
                    <button className="reset-filter-btn filter-btn" onClick={handleResetClick}>Reset</button>
                    <button className="chart-btn filter-btn" onClick={showChart}>IPA Chart</button>
                </div>
                <div className={`consonant-filters filter-card card ${currentFilter === 'consonants' ? 'active' : ''}`}>
                    <div className="consonants-aspects-features aspects">
                        <p className="aspect consonant">Manner</p>
                        <p className="aspect consonant">Place</p>
                        <p className="aspect consonant">Voicing</p>
                    </div>
                    <div className="aspect-items-container">
                        <p className="aspect aspect-vertical consonant">Manner</p>
                        <AspectItemsContainer items={consonant_aspects_one} category="manner" wordType={'consonant'} resetClickCount={resetClickCount} color={'red'} type={'consonant'}/>
                        <p className="aspect aspect-vertical consonant">Place</p>
                        <AspectItemsContainer items={consonant_aspects_two} category="place" wordType={'consonant'} resetClickCount={resetClickCount} color={'blue'} type={'consonant'}/>
                        <p className="aspect aspect-vertical consonant">Voicing</p>
                        <AspectItemsContainer items={consonant_aspects_three} category="voicing" wordType={'consonant'} resetClickCount={resetClickCount} color={'green'} type={'consonant'}/>
                    </div>
                    <button className="close-btn" onClick={closeFilterCard}>&times;</button>
                </div>
                <div className={`vowels-filters filter-card card ${currentFilter === 'vowels' ? 'active' : ''}`}>
                    <div className="monothong-dipthong-btn-grid">
                        <button 
                            className={`${currentVowelType === 'monothongs' ? 'active' : ''}`}
                            onClick={handleVowelTypeClick} 
                            data-vowel-type="monothongs"
                        >
                            Monothongs
                        </button>
                        <button 
                            className={`${currentVowelType === 'dipthongs' ? 'active' : ''}`}
                            onClick={handleVowelTypeClick} 
                            data-vowel-type="dipthongs"
                        >
                            Dipthongs
                        </button>
                    </div>
                    <div className={`monothongs ${currentVowelType === 'monothongs' ? 'visible' : ''}`} data-vowel="monothongs">
                        <div className="monothongs-aspect aspects">
                            <p className="aspect vowel">Height</p>
                            <p className="aspect vowel">Front/Back</p>
                            <p className="aspect vowel">Open/Close</p>
                            <p className="aspect vowel">Rounding</p>
                            <p className="aspect vowel">Tensity</p>
                        </div>
                        <div className="aspect-items-container">
                            <p className="aspect-vertical vowel">Height</p>
                            <AspectItemsContainer items={vowels_height} category='height' wordType={'vowel'} subType={'monothong'} resetClickCount={resetClickCount} color={'red'} type={'vowel'}/>
                            <p className="aspect-vertical vowel">Front/Back</p>
                            <AspectItemsContainer items={vowels_front_back} category='front_back' wordType={'vowel'} subType={'monothong'} resetClickCount={resetClickCount} color={'blue'} type={'vowel'}/>
                            <p className="aspect-vertical vowel">Open/Close</p>
                            <AspectItemsContainer items={vowels_open_close} category='open_close' wordType={'vowel'} subType={'monothong'} resetClickCount={resetClickCount} color={'green'} type={'vowel'}/>
                            <p className="aspect-vertical vowel">Rounding</p>
                            <AspectItemsContainer items={vowels_rounding} category='rounding' wordType={'vowel'} subType={'monothong'} resetClickCount={resetClickCount} color={'orange'} type={'vowel'}/>
                            <p className="aspect-vertical vowel">Tensity</p>
                            <AspectItemsContainer items={vowels_tensity} category='tensity' wordType={'vowel'} subType={'monothong'} resetClickCount={resetClickCount} color={'purple'} type={'vowel'}/>
                        </div>
                    </div>
                    <div className={`dipthongs ${currentVowelType === 'dipthongs' ? 'visible' : ''}`} >
                        <div className="vowels-aspects aspects">
                            <AspectItemsContainer items={dipthongs} category={'centering-or-closing'} wordType={'vowel'} subType={'dipthong'} resetClickCount={resetClickCount} color={'red'} type={'vowel'}/>
                        </div>
                    </div>
                    <button className="close-btn" onClick={closeFilterCard}>&times;</button>
                </div>
                {ReactDOM.createPortal(
                    <div className={`ipa-chart-outlayer ${chartOpen ? 'visible' : ''}`} onClick={handleChartClick}>
                        <div className="ipa-chart-container" >
                            <a 
                                href="https://firebasestorage.googleapis.com/v0/b/nyanipa-7da14.appspot.com/o/ipa-chart%2Fipa-chart.jpg?alt=media&token=de5c7ed5-1dcf-40b7-830a-16c20a415207"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={IPAChart} alt="IPA Chart Full sound" />
                            </a>
                            <button className="close-btn" onClick={hideChart}>&times;</button>
                        </div>
                    </div>,
                    document.getElementById('root')
                )}
            </div>
        
    )
}
