import { ASYNC_ACTION_START, ASYNC_ACTION_FINISHED, ASYNC_ACTION_ERROR } from "../../Types"

export const asyncActionStart = (name) => {
    return{
        type: ASYNC_ACTION_START,
        payload: name
    }
}
export const asyncActionFinished = () => {
    return{
        type: ASYNC_ACTION_FINISHED
    }
}
export const asyncActionError = () => {
    return{
        type: ASYNC_ACTION_ERROR
    }
}