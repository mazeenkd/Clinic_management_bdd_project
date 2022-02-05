import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Bootstrab/Acceil/sb-admin-2.css'
import profileImage  from '../images/undraw_profile.svg'
import {Link, useHistory} from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { AddOperation, initOperation } from '../Redux/FunctionRedux/Operation'
import ScrollTopButton from '../Components/ScollTopButton'
import { AddUser } from '../Redux/FunctionRedux/User'
import Sauvegarder from '../Components/Sauvegarder'
import Ajouter from '../Components/Ajouter'



export default function NouveauMedecin(props) {

    const history = useHistory();
    // check user
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
  
    // check if user EXiste
    
    

        //redux 
        const Operation = useSelector(state => state.operations.Operations);
        const year = new Date().getFullYear().toString()
        
   




    const [operation, setoperation] = useState({CodeOp : '',
    NumSalleOp :'' ,
    CodePinOp  : '',
    DateOp : '',
});




const handlerClick = e => {
    
    
    axios.post('http://localhost:5000/api/v1/operations/',operation ).then(res =>{ dispatch(AddOperation(res.data))});
    
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
                Nouvelle operation
            </h3>
            <div id='main'>
                    <form  onSubmit={(e) => {handlerClick(e)}}>
                    <div id='form'>
                        <div className="divsyazeh">
                        <div className='div'>
                     <div><label htmlFor="numdoss">#id</label></div>
                     <div><input type="text" id="numdoss" name="numdoss" required   value={operation.CodeOp} onChange={e => setoperation(previousState => ({ ...previousState, CodeOp: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                    </div>
                    
                    <div className='div'>
                       <div> <label htmlFor="fourn">Salle</label></div>
                       <div><input type="text" id="numdoss" name="numdoss" required   value={operation.NumSalleOp} onChange={e => setoperation(previousState => ({ ...previousState, NumSalleOp: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
                     </div>
                       </div>  
                      <div className='div'>
                       <div> <label htmlFor="fourn">Date</label></div>
                       <div><input type="date" id="numdoss" name="numdoss"  value={operation.DateOp} onChange={e => setoperation(previousState => ({ ...previousState, DateOp: e.target.value }))}/>
                     </div>
                       </div>  
                       <div className='div'>
                     <div><label htmlFor="numdoss">Patient</label></div>
                     <div><input type="text" id="numdoss" name="numdoss" required   value={operation.CodePinOp} onChange={e => setoperation(previousState => ({ ...previousState, CodePinOp: e.target.value }))}required helperText="Ce champs est obligatoire!"/>
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
