import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/ModalStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonChalkboard, faStar } from '@fortawesome/free-solid-svg-icons'
import UploadVideoButton from './UploadVideoButton'
import IPA_SOUNDS from '../data'
import { getVideoURL } from '../redux/actions/modalActions'
import DeleteVideoButton from './DeleteVideoButton'
import { capitalize } from '../helper'

export default function Modal({ soundId, name, links, closeModal}) {
    const [activeVideo, setActiveVideo] = useState(1)
    const [linksToShow, setLinksToShow] = useState([])
    const currentUser = useSelector(state => state.userStatus.currentUser)
    const videoLinks = useSelector(state => state.modalStatus.videoLinks)
    const dispatch = useDispatch()
    const videoBtnGridRef = useRef()
    const videoContainerRef = useRef()

    const sound = IPA_SOUNDS.find(sound => sound.id === soundId)
    const wordType = sound.type.name
    const prepath = `videos/${currentUser?.uid}/${wordType}s/${soundId}/`

    useEffect(() => {
        if (currentUser) {
            dispatch(getVideoURL(currentUser?.uid, prepath))
        } 
    }, [currentUser, dispatch, prepath])

    useEffect(() => {
        if (videoLinks.every(link => link === '')) return setLinksToShow(links)
        const validLinks = videoLinks.map((link, index) => {
            if (link != null) {
                return link
            } else {
                return links[index]
            }
        })
        setLinksToShow(validLinks)
    }, [videoLinks, links])

    function handleSlideTransition(e) {
        const videoBtns = [...videoBtnGridRef.current.querySelectorAll('.video-btn')]
        const currentIndex = videoBtns.indexOf(e.target.closest('button'))
        
        const paginationElement = videoContainerRef.current.querySelector('.swiper-pagination')
        const paginationDots = [...paginationElement.querySelectorAll('.swiper-pagination-bullet')]
        const clickedDot = paginationDots[currentIndex]
        
        clickedDot.click()
    }

    function handleOutlayClick(e) {
        if (e.target.matches('.video-modal-container')) closeModal()
    }

    function handleSlideChange(e) {
        const paginationElement = videoContainerRef.current.querySelector('.swiper-pagination')
        const paginationDots = [...paginationElement.querySelectorAll('.swiper-pagination-bullet')]
        const activeDot = paginationElement.querySelector('.swiper-pagination-bullet-active')
        const activeIndex = paginationDots.indexOf(activeDot)
        setActiveVideo(activeIndex + 1)
    }

    return (
        <div className="video-modal-container" onClick={handleOutlayClick}>   
            <div className="video-modal">
                <div className="sound-name-container">
                    <h2>{capitalize(wordType)}: /{name}/</h2>
                </div>
                <div className="video-btn-grid" ref={videoBtnGridRef}>
                    <button className={`video-btn ${activeVideo === 1 ? 'active' : ''}`} onClick={handleSlideTransition} data-slide="mouth">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" 
                            className="video-btn-icon"
                            width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M1540 4610 c-305 -23 -622 -123 -852 -266 -138 -86 -298 -236 -378
                            -354 -75 -110 -145 -297 -182 -485 -29 -144 -31 -405 -5 -537 34 -170 110
                            -365 216 -553 120 -212 308 -601 326 -674 14 -57 16 -100 12 -209 -7 -202 -34
                            -291 -209 -676 -112 -246 -158 -357 -158 -381 0 -32 30 -73 61 -84 23 -8 303
                            -11 946 -11 998 0 957 -2 982 57 8 21 9 58 1 143 -13 149 -13 271 1 307 13 35
                            55 80 92 99 15 8 80 19 145 25 364 30 395 36 478 92 66 44 110 105 135 189 19
                            62 21 87 17 203 l-5 133 32 30 c47 45 61 84 46 133 -12 39 -11 40 29 77 22 22
                            40 47 40 57 0 9 -16 52 -35 95 -35 76 -44 123 -26 134 5 3 43 13 85 21 91 17
                            172 58 198 100 46 73 5 163 -198 436 -61 82 -121 172 -133 200 -22 49 -22 55
                            -10 180 9 99 9 147 0 211 -10 75 -59 286 -77 333 -7 18 -6 18 16 2 54 -38 131
                            -13 146 47 13 51 -65 247 -144 362 -47 69 -147 168 -215 214 -61 41 -155 83
                            -232 105 -33 9 -103 39 -155 65 -196 99 -428 160 -680 180 -146 11 -166 11
                            -310 0z"/>
                            <path d="M4256 3218 c-30 -42 -20 -65 62 -151 411 -430 546 -1030 358 -1590
                            -75 -225 -187 -407 -378 -614 -32 -34 -58 -72 -58 -83 0 -27 43 -70 71 -70 31
                            0 157 126 250 249 242 322 366 750 331 1149 -21 247 -70 423 -177 637 -77 154
                            -162 276 -280 403 -80 85 -89 92 -125 92 -29 0 -43 -6 -54 -22z"/>
                            <path d="M3970 2940 c-39 -39 -27 -73 58 -163 156 -166 248 -344 298 -576 21
                            -96 23 -319 5 -421 -41 -228 -152 -445 -317 -619 -69 -74 -81 -112 -46 -144
                            38 -35 77 -22 144 46 125 127 239 309 302 485 91 254 93 579 7 842 -59 177
                            -192 392 -319 513 -66 62 -98 71 -132 37z"/>
                            <path d="M3682 2644 c-35 -24 -30 -73 14 -115 96 -92 182 -239 215 -368 30
                            -115 28 -270 -6 -384 -14 -49 -35 -107 -46 -130 -32 -62 -101 -156 -153 -207
                            -51 -49 -61 -93 -28 -123 41 -37 86 -22 152 49 99 109 160 214 205 354 24 72
                            28 107 32 230 4 131 2 154 -21 244 -42 163 -111 285 -228 404 -66 66 -94 76
                            -136 46z"/>
                            </g>
                        </svg>
                    </button>
                    <button className={`video-btn ${activeVideo === 2 ? 'active' : ''}`} onClick={handleSlideTransition} data-slide="throat">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            className="video-btn-icon"
                            width="298.000000pt" height="363.000000pt" viewBox="0 0 298.000000 363.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,363.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M1163 3619 c-300 -39 -592 -175 -801 -373 -198 -188 -317 -426 -352
                            -701 -17 -131 0 -398 34 -528 31 -122 119 -343 160 -404 79 -118 71 -18 74
                            -860 l3 -753 441 0 441 0 -6 662 c-6 737 -8 761 -72 895 -44 90 -121 164 -197
                            188 -130 42 -229 119 -242 189 -16 86 31 156 111 163 53 5 72 -3 220 -94 120
                            -74 233 -108 353 -107 118 1 172 20 304 108 298 199 618 168 904 -89 114 -103
                            187 -224 250 -419 20 -61 37 -112 38 -114 1 -2 21 2 45 8 84 23 123 95 100
                            184 -6 25 -38 102 -72 173 -142 299 -217 546 -202 671 3 26 0 96 -6 155 -60
                            553 -481 947 -1116 1042 -105 16 -308 18 -412 4z"/>
                            <path d="M2098 1664 c-234 -56 -514 -325 -573 -549 -21 -81 -33 -294 -41 -737
                            l-6 -378 201 0 201 0 0 179 c0 247 -27 225 278 222 269 -3 295 2 357 68 l30
                            32 0 135 0 134 31 10 c48 16 74 46 74 86 0 43 -20 74 -70 109 -22 15 -40 31
                            -40 34 0 4 26 12 58 19 83 17 141 49 159 87 l16 33 -92 178 c-100 196 -133
                            236 -241 293 -110 59 -225 74 -342 45z"/>
                            </g>
                        </svg>
                    </button>
                    <button className={`video-btn ${activeVideo === 3 ? 'active' : ''}`} onClick={handleSlideTransition} data-slide="instruct-en">
                        <FontAwesomeIcon icon={faPersonChalkboard} className="video-btn-icon"/>
                    </button>
                    <button className={`video-btn ${activeVideo === 4 ? 'active' : ''}`} onClick={handleSlideTransition} data-slide="instruct-vi">
                        <FontAwesomeIcon icon={faStar} className="video-btn-icon"/>
                    </button>
                </div>
                <div className="video-container" ref={videoContainerRef}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={handleSlideChange}
                    >
                        {linksToShow?.map((link, index) => {
                            if (link === '') {
                                return <SwiperSlide key={`video_${index}`}><div className="empty-slide">No video found<br/>Click the button below to upload your video</div></SwiperSlide>
                            } else {
                                return <SwiperSlide key={`video_${index}`}><video  style={{border: 'none'}} controls allow="fullscreen" src={link}></video></SwiperSlide>
                            }
                        })}
                    </Swiper>
                    <UploadVideoButton soundId={soundId} activeVideo={activeVideo} videoLinks={videoLinks} />
                    <DeleteVideoButton soundId={soundId} activeVideo={activeVideo} videoLinks={videoLinks} />
                </div>
                <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
        </div>
    )
}
