import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import ScrollTopButton from '../Components/ScollTopButton';
import ModalDialog from '../Components/ModalDialog';
import { useDispatch, useSelector } from 'react-redux'
import { initOperation } from '../Redux/FunctionRedux/Operation'
import Loading from './Loading';
import { Link } from 'react-router-dom';


axios.defaults.withCredentials = true;
export default function Acceil() {


    // redux 
    const Operations = useSelector(state => state.operations.Operations)
    const existOperation = useSelector(state => state.operations.existe)
    const user =  useSelector(state => state.user);
    const dispatch = useDispatch();

    // counteDidMount
    useEffect(()=> {
        axios.get('http://localhost:5000/api/v1/operations').then(res => {
            dispatch(initOperation(res.data));
        })
    },[]);

    const handleDelete = (codeOp)=>{
           axios.delete(`http://localhost:5000/api/v1/operations/${codeOp}`,{withCredentials: true, crossorigin: true})
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
                                <h6 className="m-0 font-weight-bold text-primary" style={{color : '#0f3460'}}>Tout les operations</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                <table className="table table-borderless table-hover" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr style={{color : '#0f3460', fontSize:'14px'}} >
                                            <th>id</th>
                                            <th>Patient</th>
                                            <th>Salle</th>
                                            <th>Date</th>
                                            <th>Medecin</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr style={{color : '#0f3460', fontSize:'14px'}} >
                                            <th>id</th>
                                            <th>Patient</th>
                                            <th>Salle</th>
                                            <th>Date</th>
                                            <th>Medecin</th>
                                        </tr>
                                    </tfoot>
                                    
                                    <tbody>

                                    {existOperation ? Operations.length > 0 && Operations.map(ope => {
                                        return(
                                            <tr key={ope.CodeOp} style={{fontSize : "0.8rem",color : "#0f3460"}} >
                                             <td>{ope.CodeOp }</td>   
                                            <td>{ope.NomPatient }</td>
                                            <td>{ope.NumSalleOp}</td>
                                            <td>{ope.DateOp}</td>
                                            <td>{ope.nomMed }</td>  
                                            <td style={{textAlign : 'center'}} >
                                                    <div style={{textAlign : 'center'}}>
                                                    <Link style={{color : '#90EE90' , fontWeight : 'bold' , textAlign : 'center'}} className="consulter" to={`/modifierOperation/${ope.CodeOp}`} >editer</Link>
                                                    
                                                    </div>
                                            </td> 
                                            <td style={{textAlign : 'center'}} >
                                                    <div style={{textAlign : 'center'}}>
                                                    <Link style={{color : '#FF0000' , fontWeight : 'bold' , textAlign : 'center'}} className="consulter" onClick={()=>{handleDelete(ope.CodeOp); }} to = {"/Operations"} >suprimer</Link>
                                                    
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
                    <Link className="boutonCont" to="/nouvelleOperation">
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

