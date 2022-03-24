import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IPA_SOUNDS from '../data'
import { deleteVideo } from '../redux/actions/modalActions'

export default function DeleteVideoButton({ soundId, activeVideo, videoLinks }) {
    const currentUser = useSelector(state => state.userStatus.currentUser)
    const dispatch = useDispatch()
    const sound = IPA_SOUNDS.find(sound => sound.id === soundId)
    const wordType = sound.type.name
    const path = `videos/${currentUser?.uid}/${wordType}s/${soundId}/video-${activeVideo}`
    const isCustomLinks = videoLinks[activeVideo - 1] != null

    function handleRemoveVideo() {
        const deleteConfirm = window.confirm("Are you sure want to delete this file and use the default video if any?")
        if (deleteConfirm) dispatch(deleteVideo(currentUser.uid, path, activeVideo - 1))
    }
    
    return (
        <>
            {currentUser && isCustomLinks && (
                <>
                    <button className="delete-video-btn" onClick={handleRemoveVideo}>
                        <FontAwesomeIcon icon={faTrashCan} className="delete-video-icon" />
                        Remove Video
                    </button>
                </>
            )}
        </>
    )
}
