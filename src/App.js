import LoginScreen from "./Screens/LoginScreen";
import './index.css'
import RegistreScreen from "./Screens/RegistreScreen";
import Acceil from "./Screens";
import Commande from "./Screens/commande";
import {BrowserRouter , Route } from 'react-router-dom'
import {Provider} from  'react-redux'
import store from "./Store";
import CommandeEncore from "./Screens/CommandeEncore";
import ConsultationDossier from "./Screens/ConsultationDossier";
import Profile from "./Screens/Profile";
import ForgetPassword from "./Screens/ForgetPassword";
import Static from "./Screens/statistic";
import AideEnLign from "./Screens/AideEnLign";
import Patients from "./Screens/Patients";
import Chambres from "./Screens/Chambres";
import Medecins from "./Screens/Medecins";
import Infirmiers from "./Screens/Infirmiers";
import Operations from "./Screens/Operations";
import modifierPatient from "./Screens/modifierPatient";
import modifierMedecin from "./Screens/ModifierMedecin";
import modifierInfirmier from "./Screens/ModifierIfirmier";
import modifierChambre from "./Screens/ModifierChambre";
import nouveauMedecin from "./Screens/NouveauMedecin";
import nouveauPatient from "./Screens/NouveauPatient";
import nouveauInfirmier from "./Screens/NouveauIfirmier";
import nouvelleOperation from "./Screens/NouvelleOperation";
import modifierOperation from "./Screens/ModifierOperation";



function App() {
 
  return (
    <Provider store={store} >
      <div className="App">
          <BrowserRouter>
            <Route exact component={Acceil} path='/'  />
            <Route component={LoginScreen} exact path='/login' />
            <Route component={Patients} exact path='/patients' />
            <Route component={modifierPatient} exact path='/modifierPatient/:CodePatient' />
            <Route component={modifierMedecin} exact path='/modifierMedecin/:codeMed' />
            <Route component={modifierInfirmier} exact path='/modifierInfirmier/:CodeInf' />
            <Route component={modifierChambre} exact path='/modifierChambre' />
            <Route component={modifierOperation} exact path='/modifierOperation/:CodeOp' />
            <Route component={nouveauInfirmier} exact path='/nouveauInfirmier' />
            <Route component={nouveauMedecin} exact path='/nouveauMedecin' />
            <Route component={nouveauPatient} exact path='/nouveauPatient' />
            <Route component={nouvelleOperation} exact path='/nouvelleOperation' />
            <Route component={Medecins} exact path='/medecins' />
            <Route component={Chambres} exact path='/chambres' />
            <Route component={Infirmiers} exact path='/infirmiers' />
            <Route component={Operations} exact path='/operations' />
            <Route component={RegistreScreen} path='/registre' />
            <Route component={Profile} path='/profile' />
            <Route component={ForgetPassword} path='/forgetPassword' />
            <Route component={Static} path='/static'/>
            <Route component={AideEnLign} path='/aide' />
          </BrowserRouter>
        
      </div>
    </Provider>
  );
}

export default App;
