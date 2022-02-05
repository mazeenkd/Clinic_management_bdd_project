import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import { DossierReduce } from "./Redux/Reducers/DossiersReduce";
import { MedecinReduce } from "./Redux/Reducers/MedecinReduce";
import { InfirimierReduce } from "./Redux/Reducers/InfirimierReduce";
import { PatientReduce } from "./Redux/Reducers/PatientReduce";
import { OperationReduce } from "./Redux/Reducers/OperationReduce";
import { ChambreReduce } from "./Redux/Reducers/ChambreReduce";
import thunk from 'redux-thunk'
import { UserReduce } from "./Redux/Reducers/UserReduce";
import axios from "axios";

async function axiosTest() {

    return await axios.get("http://localhost:4000/checkUser",{withCredentials : true});

    

}


const initState = {
    dossiers : {
        existe : JSON.parse(localStorage.getItem('dossiers_projet_2cp')) ? true : false ,
        Dossiers : JSON.parse(localStorage.getItem('dossiers_projet_2cp'))  ? JSON.parse(localStorage.getItem('dossiers_projet_2cp'))  : []
    } ,
    medecins : {
        existe : JSON.parse(localStorage.getItem('')) ? true : false ,
        medecins : JSON.parse(localStorage.getItem(''))  ? JSON.parse(localStorage.getItem(''))  : []
    } ,
    infirimiers : {
        existe : JSON.parse(localStorage.getItem('')) ? true : false ,
        infirimiers : JSON.parse(localStorage.getItem(''))  ? JSON.parse(localStorage.getItem(''))  : []
    } ,
    patients : {
        existe : JSON.parse(localStorage.getItem('')) ? true : false ,
        infirimiers : JSON.parse(localStorage.getItem(''))  ? JSON.parse(localStorage.getItem(''))  : []
    } ,
    operations : {
        existe : JSON.parse(localStorage.getItem('')) ? true : false ,
        infirimiers : JSON.parse(localStorage.getItem(''))  ? JSON.parse(localStorage.getItem(''))  : []
    } ,
    chambres : {
        existe : JSON.parse(localStorage.getItem('')) ? true : false ,
        infirimiers : JSON.parse(localStorage.getItem(''))  ? JSON.parse(localStorage.getItem(''))  : []
    } ,
    user : {
        existe :   false ,
        user :  {}
    }
}

const rerducers = combineReducers({
    dossiers : DossierReduce ,
    medecins : MedecinReduce ,
    infirimiers : InfirimierReduce ,
    patients : PatientReduce ,
    operations : OperationReduce ,
    chambres : ChambreReduce ,
    
    user : UserReduce,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rerducers , 
    initState ,
    composeEnhancer(applyMiddleware(logger , thunk))
)

export default store ;