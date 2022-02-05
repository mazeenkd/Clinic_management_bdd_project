import '../index.css';
import { Link } from 'react-router-dom';

const Ajouter = () => {
    return (
        <Link className="boutonCont" to="/nouveauDossier">
            <button class="noselect"><span class='text'>Ajouter</span></button>
        </Link>

     );
}

export default Ajouter;