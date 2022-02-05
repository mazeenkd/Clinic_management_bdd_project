import { ADD_CHAMBRE, INIT_CHAMBRES, MODIFY_CHAMBRE } from "../ActionsName/Chambre";

 export const ChambreReduce = (state = {existe : false , Chambres : []},action) => {
    switch(action.type) {
        case INIT_CHAMBRES : 
            return {...state ,existe : true, Chambres : action.payload}
        case ADD_CHAMBRE : 
            return {...state , existe : true , Chambres : [...state.Chambres , action.payload]}      
        case MODIFY_CHAMBRE : 
            return {...state , Chambres : [...state.Chambres.filter(cha => cha.NumChambre.toString() !== action.payload.VumChambre.toString()),action.payload]}
        default : 
            return state 
    }
}