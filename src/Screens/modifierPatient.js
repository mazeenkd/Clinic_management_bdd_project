import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import profileImage  from '../images/undraw_profile.svg'
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import {Link, useHistory} from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { ModifyPatient, initPatient } from '../Redux/FunctionRedux/Patient'
import ScrollTopButton from '../Components/ScollTopButton'
import { AddUser } from '../Redux/FunctionRedux/User'
import Sauvegarder from '../Components/Sauvegarder'
import Ajouter from '../Components/Ajouter'
import { useParams } from 'react-router-dom'

//...



export default function ModifierPatient() {

    const  id  = useParams()
    const snackbarRef = useRef(null);
    const history = useHistory();
    // check user
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
  
    const Patients = useSelector(state => state.patients.Patients);
    

    const [patient, setpatient] = useState({ CodePatient : '',
    NomPatient :'' ,
    PrenomPatient : '',
    NumTelPatient : '',
    Maladie: '',
    AdressePatient: '',
    NumChambrePatient:'',
    DateSort: '' , 
    DateArriv : ''})

   // counteDidMount
   useEffect(()=> {
    axios.get('http://localhost:5000/api/v1/patients/'+id.CodePatient ).then(res => {
        dispatch(initPatient(res.data));
    })
},[]);
console.log(Patients);



const handlerClick = e => {
    axios.put('http://localhost:5000/api/v1/patients/'+id.CodePatient ).then(() => {
        snackbarRef.current.show();
    });
}




// counteDidMount
// eslint-disable-next-line react-hooks/rules-of-hooks

    return (
      
      <div id="wrapper">
      <ScrollTopButton />
      <Sidebar user={user} />
     <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">

        <Navbar />
        <div className="user">
            <div className="userTitleContainer">
                <h1>Patient {'>>'}</h1>
                <div className="bottons">
                <Link to="/newuser">
                  
                  <button className="userAddButton">Nouveau</button>
                  </Link>
                  <Link to="/">
                  <button className="userAddButton">Sauvegarder</button>
                  </Link>
               </div>
                
                
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={profileImage} alt="" className="userShowImg" />
                    
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">{Patients[0].CodePatient}</span>
                        <span className="userShowUserTitle">{`${Patients[0].NomPatient} ${Patients[0].PrenomPatient}`}</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Personnel Details</span>
                        <div className="userShowInfo">
                        <PermIdentity classname="userShowIcon"/>
                        <span className="userShowInfoTitle">{`${Patients[0].NomPatient} ${Patients[0].PrenomPatient}`}</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday classname="userShowIcon"/>
                        <span className="userShowInfoTitle">{Patients[0].DateNaisPat}</span>
                        </div>
                        <span className="userShowTitle">Contact details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid classname="userShowIcon"/>
                        <span className="userShowInfoTitle">{Patients[0].NumTelPatient}</span>
                        </div>
                        <div className="userShowInfo">

                        </div>
                        <div className="userShowInfo">
                        <LocationSearching classname="userShowIcon"/>
                        <span className="userShowInfoTitle">{Patients[0].AdressePatient}</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Operation</span>
                    <form  onSubmit={(e) => {handlerClick(e)}}>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Medecin</label>
                                <input type="text" placeholder="Kachi" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Diagnostic</label>
                                <input type="text" id="fourn" name="fourn"  required
                                    value={patient.Maladie} onChange={e => setpatient(previousState => ({ ...previousState, Maladie: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                                <input type="text"  className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Operation</label>
                                <input type="text" placeholder="oui" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Salle d'operation</label>
                                <input type="text" placeholder="56" className="userUpdateInput"/>
                            </div>
                           
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <input type="file"id="file" style={{display:"none"}}/>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Chambre</span>
                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Chambre</label>
                                <input type="text" placeholder="123" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Infirmiere </label>
                                <input type="text" placeholder="Fatiha Chaouche" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Date d'arriver</label>
                                <input type="text" placeholder="14/01/2022" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Date de partir</label>
                                <input type="text" placeholder="18/01/2022" className="userUpdateInput"/>
                            </div>
                           
                        </div>
                        

                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
