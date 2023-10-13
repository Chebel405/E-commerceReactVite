import React from 'react';

const Panier = ({ produits, onRemove }) => {
    return (
        <div className="panier">
            <h3>Mon Panier</h3>
            <ul>
                {produits.map((produit) => (
                    <li key={produit.id}>
                        {produit.nom} - {produit.prix} Euros
                        <button onClick={() => onRemove(produit.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Panier;