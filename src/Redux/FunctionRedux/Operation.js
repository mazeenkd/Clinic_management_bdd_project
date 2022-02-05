import { ADD_OPERATION, INIT_OPERATIONS, MODIFY_OPERATION } from "../ActionsName/Operation"

export const initOperation = (operations) => (dispatch , getState) => {
    dispatch({
        type : INIT_OPERATIONS ,
        payload : operations
    })
    localStorage.setItem('backend',JSON.stringify(getState().operations.Operations));
} 

export const AddOperation = (ope) => (dispatch , getState) => {
    dispatch({
        type :  ADD_OPERATION ,
        payload : ope
    })
    localStorage.setItem('backend',JSON.stringify(getState().operations.Operations));
}

export const ModifyOperation = (ope) => (dispatch , getState) => {
    dispatch({
        type : MODIFY_OPERATION , 
        payload : ope
    })
    localStorage.setItem('backend',JSON.stringify(getState().operations.Operations));
}