import React from "react";
import { Produits } from "../../Data/Produits"; // Utilisation de la première lettre en majuscule

const ListProduit = () => {
    return (
        <div>
            <h1>Liste des Produits</h1>
            {Produits.map((produit) => ( // Utilisation de la première lettre en majuscule
                <div key={produit.id}>
                    <h2>{produit.nom}</h2>
                    <p>Prix : {produit.prix} Euros</p>
                    <p>Type : {produit.type}</p>
                </div>
            ))}
        </div>
    );
};

export default ListProduit;
