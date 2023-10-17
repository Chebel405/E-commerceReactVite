import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Panier(props) {
    const [panier, setPanier] = useState([]);

    // Fonction pour ajouter un produit au panier
    const ajouterAuPanier = (produit) => {
        setPanier([...panier, produit]);
    };

    // Fonction pour supprimer un produit du panier
    const supprimerDuPanier = (produitId) => {
        const nouveauPanier = panier.filter((produit) => produit.id !== produitId);
        setPanier(nouveauPanier);
    };

    return (
        <div>
            <h2>Mon Panier</h2>
            <div className='ligne-produit'>
                {panier.map((produit) => (
                    <div key={produit.id}>
                        {produit.nom} - {produit.prix} Euros
                        <button className="btn btn-dark" onClick={() => props.supprimerDuPanier(produit.id)}>Retirer du Panier</button>
                        <button onClick={() => props.ajouterAuPanier(produit)}>Ajouter au panier</button>
                    </div>
                ))}
            </div>
            <Link to='/listProduit'>Revenir à la liste des produits proposés</Link>
        </div>
    );
}

export default Panier;
