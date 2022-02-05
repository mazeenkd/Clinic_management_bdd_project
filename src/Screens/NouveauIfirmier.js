import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import profileImage  from '../images/undraw_profile.svg'
import {Link, useHistory} from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { AddInfirimier, initInfirimier } from '../Redux/FunctionRedux/Infirimier'
import ScrollTopButton from '../Components/ScollTopButton'
import { AddUser } from '../Redux/FunctionRedux/User'
import Sauvegarder from '../Components/Sauvegarder'
import Ajouter from '../Components/Ajouter'



export default function NouveauPatient(props) {

    const history = useHistory();
    // check user
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
  
    // check if user EXiste
    
    

        //redux 
        const Infirimiers = useSelector(state => state.infirimiers.Infirimiers);
        const year = new Date().getFullYear().toString()
    






    const [infirimier, setinfirimier] = useState({ CodeInf : '',
    NomInf :'' ,
    PrenomInf : '',
    NumTelInf : '',
    Maladie: '',
    AdresseInf: '',
    ChambreInf:'',
    ServiceInf: '' , 
    MedInf:'',});




const handlerClick = e => {
    
    
    axios.post('http://localhost:5000/api/v1/infirimiers/',infirimier ).then(res =>{ dispatch(AddInfirimier(res.data))});
    
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
                     <div><input type="text" id="numdoss" name="numdoss" required   value={infirimier.CodeInf} onChange={e => setinfirimier(previousState => ({ ...previousState, CodeInf: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    
                    <div className='div'>
                       <div> <label htmlFor="fourn">Nom</label></div>
                       <div><input type="text" id="numdoss" name="numdoss" required   value={infirimier.NomInf} onChange={e => setinfirimier(previousState => ({ ...previousState, NomInf: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                       </div>  
                      <div className='div'>
                       <div> <label htmlFor="fourn">Prenom</label></div>
                       <div><input type="text" id="numdoss" name="numdoss" required   value={infirimier.PrenomInf} onChange={e => setinfirimier(previousState => ({ ...previousState, PrenomInf: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                       </div>  
                       <div className='div'>
                     <div><label htmlFor="numdoss">Telephone</label></div>
                     <div><input type="text" id="numdoss" name="numdoss" required   value={infirimier.NumTelInf} onChange={e => setinfirimier(previousState => ({ ...previousState, NumTelInf: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    <div className='div'>
                     <div><label htmlFor="numdoss">Adresse</label></div>
                     <div><input type="text" id="numdoss" name="numdoss" required   value={infirimier.AdresseInf} onChange={e => setinfirimier(previousState => ({ ...previousState, AdresseInf: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    
                    <div className='div'>
                       <div> <label htmlFor="fourn">Chambre</label></div>
                       <div><input type="text" id="numdoss" name="numdoss" required   value={infirimier.ChambreInf} onChange={e => setinfirimier(previousState => ({ ...previousState, ChambreInf: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                       </div>  
                      <div className='div'>
                       <div> <label htmlFor="fourn">Service</label></div>
                       <div><input type="text" id="numdoss" name="numdoss" required   value={infirimier.ServiceInf} onChange={e => setinfirimier(previousState => ({ ...previousState, ServiceInf: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                       </div>  
                       <div className='div'>
                     <div><label htmlFor="numdoss">Medecin Superviseur</label></div>
                     <div><input type="text" id="numdoss" name="numdoss" required   value={infirimier.MedInf} onChange={e => setinfirimier(previousState => ({ ...previousState, MedInf: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
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
