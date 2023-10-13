import React from "react";

const DetailProduit = ({ produit }) => {
    return (
        <div>
            <h2>{produit.nom}</h2>
            <p>Prix : {produit.prix} Euros</p>
            <p>Type : {produit.type}</p>
        </div>
    );
};

export default DetailProduit;