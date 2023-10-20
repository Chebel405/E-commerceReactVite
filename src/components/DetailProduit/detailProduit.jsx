import React from "react";
import { useParams } from "react-router-dom";
import { produits } from "../../Data/Produits";
import styles from './../../assets/styles/detailProduit.css';
import { Link } from 'react-router-dom';


const DetailProduit = (props) => {
    const { id } = useParams(); // Récuperer l'Id avec l'URL

    const produit = produits.find((produit) => produit.id === parseInt(id));

    if (!produit) {
        return <div>Produit non trouvé</div>;
    }
    // Nouveau  : Méthode pour ajouter le Produit au panier
    const handleAjouterAuPanier = () => {
        props.ajouterAuPanier(produit);

    };

    return (
        <div className="container">
            <div className="card">
                <img src={`/${produit.image}`} alt={produit.nom} className="card-img-top image-produit-card" />
                <div className="card-body" />
                <h2>{produit.nom}</h2>
                <p>Quantite : {produit.quantite}</p>
                <p>Prix : {produit.prix} Euros</p>
                <p>Type : {produit.type}</p>
                <div className="text-center">
                    <button onClick={handleAjouterAuPanier} className="btn btn-dark">Ajouter au panier</button>
                </div>
                <div className="text-center">
                    <Link to="/" className="btn btn-primary">Retour</Link>
                </div>

            </div>
        </div>
    );
};

export default DetailProduit;