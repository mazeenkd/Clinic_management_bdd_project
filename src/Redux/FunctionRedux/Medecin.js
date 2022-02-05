import { ADD_MEDECIN, INIT_MEDECINS, MODIFY_MEDECIN } from "../ActionsName/Medecin"

export const initMedecin = (medecins) => (dispatch , getState) => {
    dispatch({
        type : INIT_MEDECINS ,
        payload : medecins
    })
    localStorage.setItem('backend',JSON.stringify(getState().medecins.Medecins));
} 

export const AddMedecin = (med) => (dispatch , getState) => {
    dispatch({
        type :  ADD_MEDECIN ,
        payload : med
    })
    localStorage.setItem('backend',JSON.stringify(getState().medecins.Medecins));
}

export const ModifyMedecin = (med) => (dispatch , getState) => {
    dispatch({
        type : MODIFY_MEDECIN , 
        payload : med
    })
    localStorage.setItem('backend',JSON.stringify(getState().medecins.Medecins));
}