import { faUpload } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IPA_SOUNDS from '../data'
import { uploadVideo } from '../redux/actions/modalActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VALID_EXTESIONS = ['video/mp4']
export default function UploadVideoButton({ soundId, activeVideo }) {
    const currentUser = useSelector(state => state.userStatus.currentUser)
    const dispatch = useDispatch()
    const fileInputRef = useRef()
    const sound = IPA_SOUNDS.find(sound => sound.id === soundId)
    const wordType = sound.type.name
    
    const path = `videos/${currentUser?.uid}/${wordType}s/${soundId}/video-${activeVideo}`

    function handleVideoInput(e) {
        const file = e.target.files[0]
        if (!VALID_EXTESIONS.includes(file.type)) return alert("Please choose mp4 video to upload")

        dispatch(uploadVideo(currentUser.uid, file, path))
    }

    return (
        <>
            {currentUser && (
                <>
                    <button className="upload-video-btn" onClick={() => fileInputRef.current.click()}>
                        <FontAwesomeIcon icon={faUpload} className="upload-video-icon" />
                        Upload Video 
                    </button>
                    <input type="file" hidden={true} ref={fileInputRef} onChange={handleVideoInput}/>
                </>
            )}
        </>
    )
}
