import { ADD_INFIRIMIER, INIT_INFIRIMIERS, MODIFY_INFIRIMIER } from "../ActionsName/Infirimier";

 export const InfirimierReduce = (state = {existe : false , Infirimiers : []},action) => {
    switch(action.type) {
        case INIT_INFIRIMIERS : 
            return {...state ,existe : true, Infirimiers : action.payload}
        case ADD_INFIRIMIER : 
            return {...state , existe : true , Infirimiers : [...state.Infirimiers , action.payload]}      
        case MODIFY_INFIRIMIER : 
            return {...state , Infirimiers : [...state.Infirimiers.filter(inf => inf.codeInf.toString() !== action.payload.codeInf.toString()),action.payload]}
        default : 
            return state 
    }
}