import { ADD_PATIENT, INIT_PATIENTS, MODIFY_PATIENT } from "../ActionsName/Patient";

 export const PatientReduce = (state = {existe : false , Patients : []},action) => {
    switch(action.type) {
        case INIT_PATIENTS : 
            return {...state ,existe : true, Patients : action.payload}
        case ADD_PATIENT : 
            return {...state , existe : true , Patients : [...state.Patients , action.payload]}      
        case MODIFY_PATIENT : 
            return {...state , Patients : [...state.Patients.filter(pat => pat.codePatient.toString() !== action.payload.codePatient.toString()),action.payload]}
        default : 
            return state 
    }
}