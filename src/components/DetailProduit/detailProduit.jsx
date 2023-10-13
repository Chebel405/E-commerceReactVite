import React from "react";
import { useParams } from "react-router-dom";
import { produits } from "../../Data/Produits";
import styles from './../../assets/styles/detailProduit.css';

const DetailProduit = () => {
    const { id } = useParams(); // Récuperer l'Id avec l'URL

    const produit = produits.find((produit) => produit.id === parseInt(id));

    if (!produit) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div className="container">
            <h2>{produit.nom}</h2>
            <p>Prix : {produit.prix} Euros</p>
            <p>Type : {produit.type}</p>
        </div>
    );
};

export default DetailProduit;