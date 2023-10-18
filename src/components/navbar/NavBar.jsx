import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import styles from './../../assets/styles/navBar.css';

const cartIconStyle = { color: "#1f4b51" };
const searchIconStyle = { color: "#1f4b51", cursor: "pointer" };

export const NavBar = () => {
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState(""); // État pour stocker le terme de recherche

    const searchBarStyle = { // Ajoutez des styles personnalisés ici
        width: "200px", // Largeur personnalisée
        marginRight: "10px" // Marge à droite pour espacement
    };


    const handleCartIconClick = () => {
        history.push("/panier");
    };

    const handleSearch = () => {
        // Filtrer selon le choix de l'utilisateur 
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Auchan</a>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher un produit..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="input-group-text" style={searchIconStyle} onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
                <FontAwesomeIcon icon={faShoppingCart} style={cartIconStyle} onClick={handleCartIconClick} />
            </div>
        </nav>
    )
}
