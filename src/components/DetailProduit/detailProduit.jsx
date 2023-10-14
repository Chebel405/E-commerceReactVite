import React from "react";
import { useParams } from "react-router-dom";
import { produits } from "../../Data/Produits";
import styles from './../../assets/styles/detailProduit.css';
import { Link } from 'react-router-dom';


const DetailProduit = () => {
    const { id } = useParams(); // Récuperer l'Id avec l'URL

    const produit = produits.find((produit) => produit.id === parseInt(id));

    if (!produit) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div className="container">
            <h2>{produit.nom}</h2>
            <img src={`/${produit.image}`} alt={produit.nom} className="image-produit" />
            <p>Prix : {produit.prix} Euros</p>
            <p>Type : {produit.type}</p>
            <Link to="/" className="btn-retour">Retour</Link>
        </div>
    );
};

export default DetailProduit;