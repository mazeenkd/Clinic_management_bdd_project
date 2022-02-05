import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import ScrollTopButton from '../Components/ScollTopButton';
import ModalDialog from '../Components/ModalDialog';
import { useDispatch, useSelector } from 'react-redux'
import { initPatient } from '../Redux/FunctionRedux/Patient'
import Loading from './Loading';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

export default function Acceil() {


    // redux 
    const Patients = useSelector(state => state.patients.Patients)
    const existPatient = useSelector(state => state.patients.existe)
    const user =  useSelector(state => state.user);
    const dispatch = useDispatch();

   
    // counteDidMount
    useEffect(()=> {
        axios.get('http://localhost:5000/api/v1/patients').then(res => {
            dispatch(initPatient(res.data));
        })
    },[]);

    
    const handleDelete = (CodePatient)=>{
     //   const id = CodePatient[1]; 
        console.log(CodePatient);
        axios.delete(`http://localhost:5000/api/v1/patients/${CodePatient}`,{withCredentials: true, crossorigin: true})
};
    const cond = true
    if (cond) {
    return (
        <>
          <div id="wrapper">
            <ScrollTopButton />
                <Sidebar user={user} />
               <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                  <Navbar />
                    <div className="container-fluid">
                        <div className="blog-card">
                            <div className="meta">
                            <div className="photo"  ></div>        
                            </div>
                        </div>
                        
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary" style={{color : '#0f3460'}}>Tout les patients</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                <table className="table table-borderless table-hover" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr style={{color : '#0f3460', fontSize:'14px'}} >
                                            <th>id</th>
                                            <th>Nom</th>
                                            <th>Prenom</th>
                                            <th>Adresse</th>
                                            <th>Telephone</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr style={{color : '#0f3460',
                                        fontSize:'14px'}}>
                                            <th>id</th>
                                            <th>Nom</th>
                                            <th>Prenom</th>
                                            <th>Adresse</th>
                                            <th>Telephone</th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                    
                                    <tbody>

                                    {existPatient ? Patients.length > 0 && Patients.map(pat => {
                                        return(
                                        <tr key={pat.CodePatient} style={{color : '#0f3460',
                                        fontSize:'12px'}} >
                                            <th>{pat.CodePatient}</th>
                                            <th>{pat.NomPatient}</th>
                                            <th>{pat.PrenomPatient}</th>
                                            <th>{pat.AdressePatient}</th>
                                            <th>{pat.NumTelPatient}</th> 
                                            <td style={{textAlign : 'center'}} >
                                                    <div style={{textAlign : 'center'}}>
                                                    <Link style={{color : '#90EE90' , fontWeight : 'bold' , textAlign : 'center'}} className="consulter" to={`/modifierPatient/${pat.CodePatient}`} >editer</Link>
                                                    
                                                    </div>
                                            </td> 
                                            <td style={{textAlign : 'center'}} >
                                                    <div style={{textAlign : 'center'}}>
                                                    <Link style={{color : '#FF0000' , fontWeight : 'bold' , textAlign : 'center'}} className="consulter" onClick={()=>{handleDelete(pat.CodePatient);window.location.reload(false); }} to = {"/Patients"} >suprimer</Link>
                                                    
                                                    </div>
                                            </td> 
                                        </tr>
                                        )
                                    }) : null }
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ajouterbouton">
                    <Link className="boutonCont" to="/nouveauPatient">
                         <button class="noselect"><span class='text'>Ajouter</span></button>
                    </Link>

                    </div>
                </div>
                <Footer />

            </div>
            </div>
               <ModalDialog />
                </>
      
       
    )}
    else {return (
        <Loading/>
    )}
}
