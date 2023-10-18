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
            <div className="card">
                <img src={`/${produit.image}`} alt={produit.nom} className="card-img-top image-produit-card" />
                <div className="card-body" />
                <h2>{produit.nom}</h2>
                <p>Prix : {produit.prix} Euros</p>
                <p>Type : {produit.type}</p>
                <Link to="/" className="btn btn-primary">Retour</Link>
            </div>
        </div>
    );
};

export default DetailProduit;