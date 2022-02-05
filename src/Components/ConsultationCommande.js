import React from 'react'

function ConsultationCommande(props) {

    const Dossier = props.Dossier;

    return (
        <>
               
              <div className="table-responsive service">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr style={{color : '#1a1a2e' , fontWeight : '600'}}>
                                    <th>Patient</th>
                                    <th></th>
                                 
                                </tr>
                            </thead>

                            <tbody style={{color : '#1a1a2e' , fontWeight : '600'}}>
                                <tr>
                                    <td>id </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>nom</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>prenom</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>adresse</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>telephone</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>chambre </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>operation</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>date de l'operation</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>medecin superviseur</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>infirmiere superviseuse</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Duré de rester</td>
                                    <td></td>
                                </tr>
                                
                            </tbody>
                </table>
                </div>
        </>
    )
}

export default ConsultationCommande
