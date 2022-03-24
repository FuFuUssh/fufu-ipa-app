import { combineReducers } from "redux"
import { filterReducer } from "./filterReducer"
import { modalReducer } from "./modalReducer"
import { toastReducer } from "./toastReducer"
import { userReducer } from "./userReducer"

const allReducers = combineReducers({
    filters: filterReducer,
    userStatus: userReducer,
    toasts: toastReducer,
    modalStatus: modalReducer,
})

export default allReducers
