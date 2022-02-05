import React, { useEffect, useState } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import logo from '../images/Groupe 41.svg'
import $ from 'jquery';
import { Link, useHistory } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import '../index.css';


export default function Sidebar(props) {
   
    const userstate =  useSelector(state => state.user);
    const user = userstate.user;
 
   
    return (
        <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="logo ">
                        <img src={logo} width="50" height="40" alt='logo' />
                    </div>
                    <div className="sidebar-brand-text mx-3" >3iyadati</div>
                </a>

                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-home"></i>
                        <span>Accueil</span></Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Tables
                </div>
                <li className="nav-item">
                    <Link className="nav-link" to="/patients">
                        <i className="fas fa-fw fa-user-injured"></i>
                        <span>Patients</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="../medecins">
                        <i className="fas fa-fw fa-user-md"></i>
                        <span>Medecins</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/infirmiers">
                        <i className="fas fa-fw fa-user-nurse"></i>
                        <span>Infirmieres</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/operations">
                        <i className="fas fa-fw fa-clipboard-check"></i>
                        <span>Operations</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/chambres">
                        <i className="fas fa-fw fa-procedures"></i>
                        <span>Chambres</span></Link>
                </li>
                

               
                

               
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline" onClick={()=> {
                        $("body").toggleClass("sidebar-toggled");
                        $(".sidebar").toggleClass("toggled")
                }}>
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
                </ul>
    )
}
