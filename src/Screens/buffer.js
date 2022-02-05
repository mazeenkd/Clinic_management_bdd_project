import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ConsultationCommande from '../Components/ConsultationCommande';
import Navbar from '../Components/Navbar'
import ScrollTopButton from '../Components/ScollTopButton'
import Sidebar from '../Components/Sidebar'
import { AddUser } from '../Redux/FunctionRedux/User';
import Ajouter from '../Components/Ajouter';
import Sauvegarder from '../Components/Sauvegarder';
import Modifier from '../Components/Modifier';

export default function ConsultationDossier(props) {

    // get dossier to consulter
    const history = useHistory() ;
    const id  = props.match.params.id ;
    // redux
    const Docs = useSelector(state => state.dossiers.Dossiers)
    const Dossier = Docs.filter(doc =>{console.log(doc._id,id) ;return doc._id === id})[0];
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    const Avancement = () => {
        var AVANC = 0;
        if (Dossier.finish) return 100
        else {
            if (Dossier.marche.finish) AVANC += 25 ;
            if (Dossier.commande.finish) AVANC += 25;
            if (Dossier.budget.finish) AVANC += 25 ;
            if (Dossier.comptable.finish) AVANC += 25 ;
            return AVANC
        }
    }

    // check if user EXiste
     if (!user.existe) {
            axios.get("http://localhost:4000/checkUser",{withCredentials : true}).then(res => {
                console.log(res.data,'server');
            if (res.data.existe) {
                dispatch(AddUser(res.data.user));
            }else {
                history.push('/login');
            }
        })        }
   const [consulter , setConsulter] = useState(0);

   useEffect(()=> {
       if (user.existe) {
        if (!user.user.compte.includes('consultation') && user.user.service != 'ordonnateur' && user.user.service != 'adminstration' ) {
            history.push('/')
        }
       }
   },[])

   const ref = React.createRef();
   const options = {
    unit: 'in',
    format: [25,11.1]
};

    return (
        <div className='consultation' >
        <ScrollTopButton/>
                <div id="wrapper">
            
            <Sidebar />
           <div id="content-wrapper" className="d-flex flex-column">
            <div id="content"   >
            <Navbar />
            <div className="bottons">
            <Ajouter />
             <Modifier></Modifier>
             <Sauvegarder />

            </div>
             
            <ConsultationCommande></ConsultationCommande>
                
        </div>
        </div>
        </div>
        </div>
    )
}
