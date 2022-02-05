import { ADD_CHAMBRE, INIT_CHAMBRES, MODIFY_CHAMBRE } from "../ActionsName/Chambre"

export const initChambre = (chambres) => (dispatch , getState) => {
    dispatch({
        type : INIT_CHAMBRES ,
        payload : chambres
    })
    localStorage.setItem('backend',JSON.stringify(getState().chambres.Chambres));
} 

export const AddChambre = (cha) => (dispatch , getState) => {
    dispatch({
        type :  ADD_CHAMBRE ,
        payload : cha
    })
    localStorage.setItem('backend',JSON.stringify(getState().chambres.Chambres));
}

export const ModifyChambre = (cha) => (dispatch , getState) => {
    dispatch({
        type : MODIFY_CHAMBRE , 
        payload : cha
    })
    localStorage.setItem('backend',JSON.stringify(getState().chambres.Chambres));
}