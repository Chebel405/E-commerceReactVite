import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { produits } from '../../Data/Produits';
import App from '../../App';
import PanierFormulaire from '../Formulaire/PanierFormulaire';
import styles from './../../assets/styles/panierProduit.css';





const Panier = ({ panier, ajouterAuPanier, supprimerDuPanier }) => {

    const [quantiteEnCours, setQuantiteEnCours] = useState(1);

    const incrementQuantite = () => {
        setQuantiteEnCours(quantiteEnCours + 1);
    };
    const decrementQuantite = () => {
        if (quantiteEnCours > 0) {
            setQuantiteEnCours(quantiteEnCours - 1);
        };
    }

    return (
        <div>
            <h2>Mon Panier</h2>
            <table className='table-panier'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Nom</th>
                        <th>Quantite</th>
                        <th>Prix</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {panier && panier.map((produit) => (
                        <tr key={produit.id}>
                            <td><img src={produit.image} alt={produit.nom} className="image-produit" /></td>
                            <td>{produit.nom}</td>
                            <td>
                                <button onClick={decrementQuantite}>-</button>
                                {quantiteEnCours}
                                <button onClick={incrementQuantite}>+</button>
                            </td>
                            <td>{produit.prix} Euros</td>
                            <td>
                                <button onClick={() => supprimerDuPanier(produit.id)} className="btn btn-primary">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to='/'>Retour</Link>
        </div>

        // <div>
        //     <h2>Mon Panier</h2>
        //     <div className='ligne-produit'>
        //         {panier && panier.map((produit) => (
        //             <div key={produit.id} className='produit'>
        //                 <img src={produit.image} alt={produit.nom} className="image-produit" /> - {produit.nom} - {produit.prix} Euros
        //                 <button onClick={() => supprimerDuPanier(produit.id)} className="btn btn-primary">Supprimer</button>
        //             </div>
        //         ))}
        //         {/* <PanierFormulaire ajouterAuPanier={ajouterAuPanier} /> */}
        //     </div>
        //     <Link to='/'>Retour</Link>
        // </div>
    );
}

export default Panier;

