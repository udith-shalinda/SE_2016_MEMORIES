import { createReducer } from "../util/reducerUtil"
import { CHECK_USER_AUTH_STATE, REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../../Types"

const initialState = null

// CHECK USERS IS LOGGEDIN OR NOT
const checkUsersAuthState = (state, payload)=>{
    return payload.auth
}

// REGISTER USER
const registerUser = (state)=>{
    return true
}

// LOGIN USER
const loginUser = (state)=>{
    return true
}

// LOGOUT USER
const logOutUser = (state)=>{
    return true
}
export default createReducer(initialState, {
    [CHECK_USER_AUTH_STATE]: checkUsersAuthState,
    [REGISTER_USER]: registerUser,
    [LOGIN_USER]: loginUser,
    [LOGOUT_USER]: logOutUser,
})