/* eslint-disable react-hooks/rules-of-hooks */
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
import { initPatient } from '../Redux/FunctionRedux/Patient'
import { useHistory, withRouter } from 'react-router';
import profileImage  from '../images/undraw_profile.svg'


export default function ModifierMedecin() {
  // redux 
  const Patients = useSelector(state => state.patients.Patients)
  const existPatient = useSelector(state => state.patients.existe)
  const user =  useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();





// counteDidMount
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(()=> {
    axios.get('http://localhost:5000/api/v1/patients/:CodePatient').then(res => {
        dispatch(initPatient(res.data));
    })
},[]);
    return (
      
      <div id="wrapper">
      <ScrollTopButton />
      <Sidebar user={user} />
     <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">

        <Navbar />
        <div className="user">
            <div className="userTitleContainer">
                <h1>Medecin {'>>'}</h1>
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
                        <span className="userShowUsername">#P065</span>
                        <span className="userShowUserTitle">Ahmed al tech</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Personnel Details</span>
                        <div className="userShowInfo">
                        <PermIdentity classname="userShowIcon"/>
                        <span className="userShowInfoTitle">Ahmed al tech</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday classname="userShowIcon"/>
                        <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid classname="userShowIcon"/>
                        <span className="userShowInfoTitle">+213 00 00 00</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline classname="userShowIcon"/>
                        <span className="userShowInfoTitle">ahmedeltech@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearching classname="userShowIcon"/>
                        <span className="userShowInfoTitle">soudane</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Operation</span>
                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Medecin Superviseur</label>
                                <input type="text" placeholder="Kachi" className="userUpdateInput"/>
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
                        

                    </form>
                </div>
                
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
