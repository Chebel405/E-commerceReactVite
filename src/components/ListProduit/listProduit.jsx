import React from "react";
import { Link } from "react-router-dom";
import { produits } from "../../Data/Produits";
import styles from './../../assets/styles/listProduit.css';

const ListProduit = () => {
    const produitsParLigne = 3; // Nombre de produits par ligne
    return (
        <div>
            <h1>Liste des Produits</h1>
            <div className="ligne-produits">
                {produits.map((produit) => (
                    <div key={produit.id} className="produit">
                        <h2>{produit.nom}</h2>
                        <p>Prix : {produit.prix} Euros</p>
                        <p>Type : {produit.type}</p>
                        <Link to={`/detail/${produit.id}`}>Voir les détails</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduit;
