import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import ScrollTopButton from '../Components/ScollTopButton';
import ModalDialog from '../Components/ModalDialog';
import { useDispatch, useSelector } from 'react-redux'
import { initChambre } from '../Redux/FunctionRedux/Chambre'
import { initPatient } from '../Redux/FunctionRedux/Patient'
import Loading from './Loading';

export default function Acceil() {


    // redux 
    const Chambres = useSelector(state => state.chambres.Chambres)
    const Patients = useSelector(state => state.patients.Patients)
    const existChambre = useSelector(state => state.chambres.existe)
    const user =  useSelector(state => state.user);
    const dispatch = useDispatch();

    // counteDidMount
    useEffect(()=> {
        axios.get('http://localhost:5000/api/v1/chambres').then(res => {
            dispatch(initChambre(res.data));
        })
    },[]);

    useEffect(()=> {
        axios.get('http://localhost:5000/api/v1/patients').then(res => {
            dispatch(initPatient(res.data));
        })
    },[]);
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
                                <h6 className="m-0 font-weight-bold text-primary" style={{color : '#0f3460'}}>Tout les chambres</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                <table className="table table-borderless table-hover" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr style={{color : '#0f3460', fontSize:'14px'}} >
                                            <th>Numero chambre</th>
                                            <th>Chambre Service</th>
                                            <th>Infirmiere</th>
                                            <th>Patient1</th>
                                            <th>Patient2</th>
                                            <th>Disponibilité</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr style={{color : '#0f3460',
                                        fontSize:'14px'}}>
                                            <th>Numero chambre</th>
                                            <th>Chambre Service</th>
                                            <th>Infirmiere</th>
                                            <th>Patient1</th>
                                            <th>Patient2</th>
                                            <th>Disponibilité</th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                    
                                    <tbody>

                                    {existChambre ? Chambres.length > 0 && Chambres.map(function(cha)  {
                                        const patients=Patients.map(function(x){
                                            if (cha.NumChambre==x.NumChambrePatient)
                                            return x.NomPatient
                                        })
                                        var filtered = patients.filter(function(x) {
                                            return x !== undefined;
                                       });
                                        const dispo=2 - filtered.length;
                                        
                                        return(
                                        <tr key={cha.NumChambre} style={{color : '#0f3460',
                                        fontSize:'12px'}} >
                                            <th>{cha.NumChambre}</th>
                                            <th>{cha.nomServ}</th>
                                            <th>{cha.PrenomInf}</th>
                                            <th>{filtered[0]}</th>
                                            <th>{filtered[1]}</th> 
                                            <th>{dispo}</th>       
                                                                                       
                                        </tr>
                                        )
                                    }) : null }


                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
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


