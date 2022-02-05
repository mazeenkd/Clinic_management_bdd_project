import React from 'react'
import "../index.css"
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import ScrollTopButton from '../Components/ScollTopButton';
import axios from 'axios';
import { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initMedecin } from '../Redux/FunctionRedux/Medecin'
import { useHistory, withRouter } from 'react-router';
import profileImage  from '../images/undraw_profile.svg'

axios.defaults.withCredentials = true;

export default function NouveauMedecin(props) {

    const history = useHistory();
    // check user
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
  
    // check if user EXiste
    
    

        //redux 
        const Medecins = useSelector(state => state.medecins.Medecins);
   

        const [medecin, setmedecin] = useState({ codeMed : '',
        codeMedSup :'' ,
        nomMed : '',
        prenomMed : '',
        numTel: '',
        adresse: '',
        age:'',
        });




    const handlerClick = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1/medcins/',medecin )
        
    }
    

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
                     <div><input type="text" id="numdoss" name="numdoss" required   value={medecin.codeMed} onChange={e => setmedecin(previousState => ({ ...previousState, codeMed: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    
                    <div className='div'>
                       <div> <label htmlFor="fourn">Nom</label></div>
                       <div><input type="text" id="numdoss" name="numdoss" required   value={medecin.nomMed} onChange={e => setmedecin(previousState => ({ ...previousState, nomMed: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                       </div>  
                      <div className='div'>
                       <div> <label htmlFor="fourn">Prenom</label></div>
                       <div><input type="text" id="numdoss" name="numdoss" required   value={medecin.prenomMed} onChange={e => setmedecin(previousState => ({ ...previousState, prenomMed: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                       </div>  
                       <div className='div'>
                     <div><label htmlFor="numdoss">Telephone</label></div>
                     <div><input type="text" id="numdoss" name="numdoss" required   value={medecin.numTel} onChange={e => setmedecin(previousState => ({ ...previousState, numTel: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    <div className='div'>
                     <div><label htmlFor="numdoss">Adresse</label></div>
                     <div><input type="text" id="numdoss" name="numdoss" required   value={medecin.adresse} onChange={e => setmedecin(previousState => ({ ...previousState, adresse: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    
                    <div className='div'>
                       <div> <label htmlFor="fourn">Medecin Superviseur</label></div>
                       <div><input type="text" id="numdoss" name="numdoss" required   value={medecin.codeMedSup} onChange={e => setmedecin(previousState => ({ ...previousState, codeMedSup: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                       </div>  
                      
                       <div className='div'>
                     <div><label htmlFor="numdoss">Age</label></div>
                     <div><input type="text" id="numdoss" name="numdoss" required   value={medecin.age} onChange={e => setmedecin(previousState => ({ ...previousState, age: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
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
