import axios from 'axios'
import React, { useRef } from 'react'
import  { useState } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import profileImage  from '../images/undraw_profile.svg'
import {Link, useHistory} from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { AddPatient, initPatient } from '../Redux/FunctionRedux/Patient'
import ScrollTopButton from '../Components/ScollTopButton'
import { AddUser } from '../Redux/FunctionRedux/User'
import Sauvegarder from '../Components/Sauvegarder'
import Ajouter from '../Components/Ajouter'






export default function NouveauPatient(props) {
    axios.defaults.withCredentials = true;

    const snackbarRef = useRef(null);
    const history = useHistory();
    // check user

    // check if user EXiste
    
    

        //redux 
     const Patients = useSelector(state => state.patients.Patients);
     const dispatch = useDispatch();
      //  const year = new Date().getFullYear().toString()
      //  const num = Dossiers.length > 0 ? parseInt(Dossiers[Dossiers.length - 1].num_dossier.split('/')[1]) + 1 : 1 ;

  //  const [setcode, ] = useState(`${year}/${num}`);

    const [patient, setpatient] = useState({ CodePatient : '',
        NomPatient :'' ,
        PrenomPatient : '',
        NumTelPatient : '',
        Maladie: '',
        AdressePatient: '',
        NumChambrePatient:'',
        DateSort: '2022-01-12' , 
        DateNaisPat:'',
        DateArriv : ''});




    const handlerClick = e => {
        
        
        axios.post('http://localhost:5000/api/v1/patients/',patient ).then(res =>{ dispatch(AddPatient(res.data))});
        
    }
     
    console.log(patient);
    return (
        <div className='nouveau'>
        <div id="wrapper">
        <ScrollTopButton />
         <Sidebar />
           <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

               <Navbar />
                <div className="container-fluid nouveauContainer" style={{textAlign : 'left',fontSize:'14px'}}>
            <h3 style={{margin : '1rem'}}>
                Nouveau patient
            </h3>
            <div id='main'>
                    <form  onSubmit={(e) => {handlerClick(e)}}>
                    <div id='form'>
                        <div className="divsyazeh">
                        <div className='div'>
                     <div><label htmlFor="numdoss">#id</label></div>
                     <div><input type="text" id="numdoss" name="numdoss" required   value={patient.CodePatient} onChange={e => setpatient(previousState => ({ ...previousState, CodePatient: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    
                    <div className='div'>
                       <div> <label htmlFor="fourn">Nom</label></div>
                       <div> <input type="text" id="fourn" name="fourn"  required
                                    value={patient.NomPatient} onChange={e => setpatient(previousState => ({ ...previousState, NomPatient: e.target.value }))}required helperText="Ce champs est obligatoire!"/></div>
                       </div>  
                      <div className='div'>
                       <div> <label htmlFor="fourn">Prenom</label></div>
                       <div> <input type="text" id="fourn" name="fourn"  required
                                    value={patient.PrenomPatient} onChange={e => setpatient(previousState => ({ ...previousState, PrenomPatient: e.target.value }))}required helperText="Ce champs est obligatoire!"/></div>
                       </div>  
                       <div className='div'>
                     <div><label htmlFor="numdoss">Telephone</label></div>
                     <div><input type="text" id="numdoss" name="numdoss"  value={patient.NumTelPatient} onChange={e => setpatient(previousState => ({ ...previousState, NumTelPatient: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    <div className='div'>
                     <div><label htmlFor="numdoss">Adresse</label></div>
                     <div><input type="text" id="numdoss" name="numdoss"    value={patient.AdressePatient} onChange={e => setpatient(previousState => ({ ...previousState, AdressePatient: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    
                    <div className='div'>
                       <div> <label htmlFor="fourn">Chambre</label></div>
                       <div> <input type="text" id="fourn" name="fourn"  required
                                    value={patient.NumChambrePatient} onChange={e => setpatient(previousState => ({ ...previousState, NumChambrePatient: e.target.value }))}required helperText="Ce champs est obligatoire!"/></div>
                       </div>  
                      <div className='div'>
                       <div> <label htmlFor="fourn">Maladie</label></div>
                       <div> <input type="text" id="fourn" name="fourn"  required
                                    value={patient.Maladie} onChange={e => setpatient(previousState => ({ ...previousState, Maladie: e.target.value }))}required helperText="Ce champs est obligatoire!"/></div>
                       </div>  
                       <div className='div'>
                     <div><label htmlFor="numdoss">Date Naissance</label></div>
                     <div><input type="date" id="numdoss" name="numdoss"  value={patient.DateNaisPat} onChange={e => setpatient(previousState => ({ ...previousState, DateNaisPat: e.target.value }))}/>
                     </div>
                     </div>
                       <div className='div'>
                     <div><label htmlFor="numdoss">Date Arrive</label></div>
                     <div><input type="date" id="numdoss" name="numdoss"  value={patient.DateArriv} onChange={e => setpatient(previousState => ({ ...previousState, DateArriv: e.target.value }))}/>
                     </div>
                     
                    </div>
                        </div>
                        
                    
                    </div> 
                    <div id='bottuns'>
                           <input  type="submit" value="Créer" style={{backgroundColor : '#1a1a2e'}}/>
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
