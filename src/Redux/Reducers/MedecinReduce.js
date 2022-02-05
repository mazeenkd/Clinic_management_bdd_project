import { ADD_MEDECIN, INIT_MEDECINS, MODIFY_MEDECIN } from "../ActionsName/Medecin";

 export const MedecinReduce = (state = {existe : false , Medecins : []},action) => {
    switch(action.type) {
        case INIT_MEDECINS : 
            return {...state ,existe : true, Medecins : action.payload}
        case ADD_MEDECIN : 
            return {...state , existe : true , Medecins : [...state.Medecins , action.payload]}      
        case MODIFY_MEDECIN : 
            return {...state , Medecins : [...state.Medecins.filter(med => med.codeMed.toString() !== action.payload.codeMed.toString()),action.payload]}
        default : 
            return state 
    }
}