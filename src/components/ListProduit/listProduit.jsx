import React from "react";
import { Link } from "react-router-dom";
import { produits } from "../../Data/Produits";
import styles from './../../assets/styles/listProduit.css';
import App from "../../App";
//import Panier from "../navbar/panier";


const ListProduit = (props) => {
    const produitsParLigne = 4; // Nombre de produits par ligne

    //Ajouter
    const ajouterAuPanier = (produit) => {
        setPanier([...panier, produit]);
    };




    return (
        <div>
            <h2>Liste des Produits</h2>
            <div className="ligne-produits">
                {produits.map((produit) => (
                    <div key={produit.id} className="produit">
                        <div className="produit-info">
                            <h2>{produit.nom}</h2>
                            <img src={produit.image} alt={produit.nom} className="image-produit" />
                            <p>Prix : {produit.prix} Euros</p>
                            <p>Type : {produit.type}</p>
                        </div>
                        <div className="produit-actions">
                            <Link to={`/detail/${produit.id}`}>Voir les détails</Link>
                            <Link to="/panier">Ajouter au panier</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduit;
