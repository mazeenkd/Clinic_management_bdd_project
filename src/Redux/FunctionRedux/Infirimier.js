import { ADD_INFIRIMIER, INIT_INFIRIMIERS, MODIFY_INFIRIMIER } from "../ActionsName/Infirimier"

export const initInfirimier = (infirimiers) => (dispatch , getState) => {
    dispatch({
        type : INIT_INFIRIMIERS ,
        payload : infirimiers
    })
    localStorage.setItem('backend',JSON.stringify(getState().infirimiers.Infirimiers));
} 

export const AddInfirimier = (inf) => (dispatch , getState) => {
    dispatch({
        type :  ADD_INFIRIMIER ,
        payload : inf
    })
    localStorage.setItem('backend',JSON.stringify(getState().infirimiers.Infirimiers));
}

export const ModifyInfirimier = (inf) => (dispatch , getState) => {
    dispatch({
        type : MODIFY_INFIRIMIER , 
        payload : inf
    })
    localStorage.setItem('backend',JSON.stringify(getState().infirimiers.Infirimiers));
}