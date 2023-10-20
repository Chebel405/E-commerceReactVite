import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { produits } from '../../Data/Produits';
import App from '../../App';




const Panier = ({ panier, ajouterAuPanier, supprimerDuPanier }) => {



    return (
        <div>
            <h2>Mon Panier</h2>
            <div className='ligne-produit'>
                {panier && panier.map((produit) => (
                    <div key={produit.id}>
                        <img src={produit.image} alt={produit.nom} className="image-produit" /> - {produit.nom} - {produit.prix} Euros
                        <button onClick={() => supprimerDuPanier(produit.id)} className="btn btn-primary">Supprimer</button>
                    </div>
                ))}
            </div>
            <Link to='/'>Retour</Link>
        </div>
    );
}

export default Panier;

