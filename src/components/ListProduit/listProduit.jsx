import React from "react";
import { Produits } from "../../Data/Produits"; // Utilisation de la première lettre en majuscule
import styles from './../../assets/styles/_listProduit.scss';

const ListProduit = () => {
    const produitsParLigne = 3; // Nombre de produits par ligne

    return (
        <div>
            <h1>Liste des Produits</h1>
            <div className="ligne-produits">
                {Produits.map((produit) => (
                    <div key={produit.id} className="produit">
                        <h2>{produit.nom}</h2>
                        <p>Prix : {produit.prix} Euros</p>
                        <p>Type : {produit.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduit;
