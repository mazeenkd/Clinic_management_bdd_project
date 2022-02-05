import { ADD_PATIENT, INIT_PATIENTS, MODIFY_PATIENT } from "../ActionsName/Patient"

export const initPatient = (patients) => (dispatch , getState) => {
    dispatch({
        type : INIT_PATIENTS ,
        payload : patients
    })
    localStorage.setItem('backend',JSON.stringify(getState().patients.Patients));
} 

export const AddPatient = (pat) => (dispatch , getState) => {
    dispatch({
        type :  ADD_PATIENT ,
        payload : pat
    })
    localStorage.setItem('backend',JSON.stringify(getState().patients.Patients));
}

export const ModifyPatient = (pat) => (dispatch , getState) => {
    dispatch({
        type : MODIFY_PATIENT , 
        payload : pat
    })
    localStorage.setItem('backend',JSON.stringify(getState().patients.Patients));
}