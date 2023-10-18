import React, { useState } from 'react';
import { Link } from "react-router-dom";




function Panier({ panier, ajouterAuPanier, supprimerDuPanier }) {

    return (
        <div>
            <h2>Mon Panier</h2>
            <div className='ligne-produit'>
                {panier.map((produit) => (
                    <div key={produit.id}>
                        {produit.nom} - {produit.prix} Euros
                        <button onClick={() => supprimerDuPanier(produit.id)}>Retirer du Panier</button>
                        <button onClick={() => ajouterAuPanier(produit)} >Ajouter au panier</button>
                    </div>,
                    console.log(panier.id)
                )
                )}


            </div>
            <Link to='/'>Retour</Link>
        </div>
    );
}

export default Panier;
