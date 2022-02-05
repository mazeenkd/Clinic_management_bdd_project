import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import ScrollTopButton from '../Components/ScollTopButton';
import ModalDialog from '../Components/ModalDialog';
import { useDispatch, useSelector } from 'react-redux'
import { initInfirimier } from '../Redux/FunctionRedux/Infirimier'
import Loading from './Loading';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;
export default function Acceil() {


    // redux 
    const Infirimiers = useSelector(state => state.infirimiers.Infirimiers)
    const existInfirimier = useSelector(state => state.infirimiers.existe)
    const user =  useSelector(state => state.user);
    const dispatch = useDispatch();

    // counteDidMount
    useEffect(()=> {
        axios.get('http://localhost:5000/api/v1/infirimiers').then(res => {
            dispatch(initInfirimier(res.data));
        })
    },[]);

    const handleDelete = (CodeInf)=>{
           console.log(CodeInf);
           axios.delete(`http://localhost:5000/api/v1/infirimiers/${CodeInf}`,{withCredentials: true, crossorigin: true})
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
                                <h6 className="m-0 font-weight-bold text-primary" style={{color : '#0f3460'}}>Tout les infirimiers</h6>
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

                                    {existInfirimier ? Infirimiers.length > 0 && Infirimiers.map(inf => {
                                        return(
                                        <tr key={inf.CodeInf} style={{color : '#0f3460',
                                        fontSize:'12px'}} >
                                            <th>{inf.CodeInf}</th>
                                            <th>{inf.NomInf}</th>
                                            <th>{inf.PrenomInf}</th>
                                            <th>{inf.AdresseInf}</th>
                                            <th>{inf.NumTelInf}</th>
                                            <td style={{textAlign : 'center'}} >
                                                    <div style={{textAlign : 'center'}}>
                                                    <Link style={{color : '#90EE90' , fontWeight : 'bold' , textAlign : 'center'}} className="consulter" to={`/modifierInfirmier/${inf.CodeInf}`} >editer</Link>
                                                    
                                                    </div>
                                            </td> 
                                            <td style={{textAlign : 'center'}} >
                                                    <div style={{textAlign : 'center'}}>
                                                    <Link style={{color : '#FF0000' , fontWeight : 'bold' , textAlign : 'center'}} className="consulter" onClick={()=>{handleDelete(inf.CodeInf) }} >suprimer</Link>
                                                    
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
                    <Link className="boutonCont" to="/nouveauInfirmier">
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
