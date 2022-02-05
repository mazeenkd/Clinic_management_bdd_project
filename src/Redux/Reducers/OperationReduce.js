import { ADD_OPERATION, INIT_OPERATIONS, MODIFY_OPERATION } from "../ActionsName/Operation";

 export const OperationReduce = (state = {existe : false , Operations : []},action) => {
    switch(action.type) {
        case INIT_OPERATIONS : 
            return {...state ,existe : true, Operations : action.payload}
        case ADD_OPERATION : 
            return {...state , existe : true , Operations : [...state.Operations , action.payload]}      
        case MODIFY_OPERATION : 
            return {...state , Operations : [...state.Operations.filter(ope => ope.codeOp.toString() !== action.payload.codeOp.toString()),action.payload]}
        default : 
            return state 
    }
}