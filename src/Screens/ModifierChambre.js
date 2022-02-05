/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import "../index.css"
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { display } from '@mui/system';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import ScrollTopButton from '../Components/ScollTopButton';
import axios from 'axios';
import { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initDossier } from '../Redux/FunctionRedux/Dossies'
import { useHistory, withRouter } from 'react-router';
import { AddUser } from '../Redux/FunctionRedux/User';
import profileImage  from '../images/undraw_profile.svg'


export default function Modifierchambre() {
  // redux 
  const Dossiers = useSelector(state => state.dossiers.Dossiers)
  const existDossier = useSelector(state => state.dossiers.existe)
  const user =  useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();





// counteDidMount
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(()=> {
    axios.get('http://localhost:4000/dossiers/getdossier').then(res => {
        dispatch(initDossier(res.data));
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
                <h1>Chambre {'>>'}</h1>
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
                
                <div className="userUpdate">
                    <span className="userUpdateTitle">Chambre</span>
                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Numero de chambre</label>
                                <input type="text" placeholder="123" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Patient 1 </label>
                                <input type="text" placeholder="Fatiha Chaouche" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Patient 2</label>
                                <input type="text" placeholder="14/01/2022" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Infirmiere</label>
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
