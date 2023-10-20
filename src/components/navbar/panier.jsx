import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { produits } from '../../Data/Produits';
import App from '../../App';
import PanierFormulaire from '../Formulaire/PanierFormulaire';
import styles from './../../assets/styles/panierProduit.css';


const Panier = ({ panier, ajouterAuPanier, supprimerDuPanier, setPanier }) => {


    const incrementQuantite = (produit) => {
        ajouterAuPanier(produit);
    };
    const decrementQuantite = (produit) => {
        const produitExistant = panier.find((p) => p.id === produit.id);

        if (produitExistant && produitExistant.quantite > 0) {
            const nouveauPanier = panier.map((p) => {
                if (p.id === produit.id) {
                    return { ...p, quantite: p.quantite - 1 };
                }
                return p;
            });
            setPanier(nouveauPanier);
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
                                <button onClick={() => decrementQuantite(produit)}>-</button>
                                {produit.quantite}
                                <button onClick={() => incrementQuantite(produit)}>+</button>
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

    );
}


export default Panier;

