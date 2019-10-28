import { createReducer } from "../util/reducerUtil"
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISHED, ASYNC_ACTION_ERROR } from "../../Types"

const initialState = {
    loading: false,
    name: null
}

const asyncActionStarted = (state, payload)=>{
    return {
        ...state,
        loading: true,
        name: payload
    }
}

const asyncActionFinished = (state)=>{
    return {
        ...state,
        loading: false,
        name: null
    }
}

const asyncActionError = (state)=>{
    return {
        ...state,
        loading: false,
        name: null
    }
}

export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncActionStarted,
    [ASYNC_ACTION_FINISHED]: asyncActionFinished,
    [ASYNC_ACTION_ERROR]: asyncActionError
})