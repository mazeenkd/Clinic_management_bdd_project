import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import $ from 'jquery'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import ScrollTopButton from '../Components/ScollTopButton';
import ModalDialog from '../Components/ModalDialog';
import { useDispatch, useSelector } from 'react-redux'
import { initDossier } from '../Redux/FunctionRedux/Dossies'
import { useHistory, withRouter } from 'react-router';
import { AddUser } from '../Redux/FunctionRedux/User';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import surg from "../images/surgery.jpg";
import Cards from "../Components/Cards";


export default function Acceil() {


    // redux 
    const Dossiers = useSelector(state => state.dossiers.Dossiers)
    const existDossier = useSelector(state => state.dossiers.existe)
    const user =  useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();



    // check if user EXiste
  
    

    // counteDidMount
    useEffect(()=> {
        axios.get('http://localhost:4000/dossiers/getdossier').then(res => {
            dispatch(initDossier(res.data));
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
                        
                        <div className="card kraht shadow mb-4">
                            
                           
                            <div><img src={surg} alt="surgery" width={'40%'} height={'60%'} /></div>
                        </div>
                    </div>
                </div>
                <div className="statisticcards">
                <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                nombre de patients</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">456</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-fw fa-user-injured fa-2x text-dark-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                nombre de medecins</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">32</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-fw fa-user-md fa-2x text-dark-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                nombre d'infirmieres</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">67</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-fw fa-user-nurse fa-2x text-dark-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                               nombre de chambres</div>
                                            <div class="h5 mb-0 font-weight-bold text-dark-800">80</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-fw fa-procedures fa-2x text-dark-300"></i>
                                        </div>
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
