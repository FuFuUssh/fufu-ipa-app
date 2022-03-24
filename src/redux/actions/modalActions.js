import { db, storage } from "../../firebase"
import { serverTimestamp, addDoc, collection, getDocs, query, where, onSnapshot, updateDoc, deleteDoc, doc } from "firebase/firestore"
import { uploadBytesResumable, ref, getDownloadURL, deleteObject } from "firebase/storage"
import { addToast, updateToast } from "./toastActions"

const ACTIONS = {
    GET_VIDEO: 'get-video',
    UPDATE_VIDEO: 'update-video',
    ADD_VIDEO: 'add-video',

    LOAD_VIDEO_START: 'load-video-start',
    LOAD_VIDEO_SUCCESS: 'load-video-success',
    LOAD_VIDEO_FAIL: 'load-video-fail',

    DELETE_VIDEO_START: 'delete-video-start',
    DELETE_VIDEO_SUCCESS: 'delete-video-start',
    DELETE_VIDEO_FAIL: 'delete-video-fail'
}

export function uploadVideo(userId, file, path) {
    return async function (dispatch) {
        try {
            const storageRef = ref(storage, path)
            const toastId = Date.now().toString()
            dispatch(addToast(file.name, toastId))
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    dispatch(updateToast(toastId, progress))
                }, 
                (error) => {
                    console.log('error')
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        const q = query(collection(db, 'videos'), where('userId', '==', userId), where('path', '==', path))
                        getDocs(q).then(existingDocs => {
                            const existingDoc = existingDocs.docs[0]
                            if (existingDoc) {
                                const docToUpdate = doc(db, 'videos', existingDoc.id)
                                updateDoc(docToUpdate, {
                                    url: url
                                })
                            } else {
                                addDoc(collection(db, 'videos'), {
                                    userId,
                                    path,
                                    url,
                                    createdAt: serverTimestamp()
                                })
                                .then(() => {})
                                .catch(error => console.error(error.message))
                            }
                        })
                    })
            })
        } catch {
            console.log('error')
        }
    }
}

export function getVideoURL(userId, prePath) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.LOAD_VIDEO_START })
            let videoLinks = []
            for (let i = 1; i <= 4; i++) {
                const path = prePath + `video-${i}`
                const q = query(collection(db, 'videos'), where('userId', '==', userId), where('path', '==', path))
                onSnapshot(q, snapshot => {
                    const firstDoc = snapshot.docs[0]

                    const fileData = { id: firstDoc?.id , ...firstDoc?.data() }
                    videoLinks[i - 1] = fileData?.url
                    if (i === 4) {
                        dispatch({ 
                            type: ACTIONS.LOAD_VIDEO_SUCCESS,
                            payload: {
                                videoLinks
                            }    
                        })
                    }
                })
            }
        } catch {
            dispatch({ type: ACTIONS.LOAD_VIDEO_FAIL })
        }
    }
}

export function deleteVideo(userId, path, index) {
    return async function (dispatch) {
        try {
            dispatch({ type: ACTIONS.DELETE_VIDEO_START, payload: { index } })
            const storageRef = ref(storage, path)
            await deleteObject(storageRef)

            const q = query(collection(db, 'videos'), where('userId', '==', userId), where('path', '==', path))
            const snapshot = await getDocs(q)
            const targetDoc = snapshot.docs[0]
            const docToDelete = doc(db, 'videos', targetDoc.id)
            await deleteDoc(docToDelete)
            dispatch({ type: ACTIONS.DELETE_VIDEO_SUCCESS })
        } catch {
            dispatch({ type: ACTIONS.DELETE_VIDEO_FAIL })
        }
    }
}

export default ACTIONS