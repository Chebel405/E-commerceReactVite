import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";


const cartIconStyle = { color: "#1f4b51" };
// Creer un filtre
export const NavBar = () => {

    const history = useHistory(); // Obtenez l'objet d'historique

    const handleCartIconClick = () => {
        history.push("/panier"); // Rediriger vers la page du panier
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Auchan</a>
                <FontAwesomeIcon icon={faShoppingCart} style={cartIconStyle} onClick={handleCartIconClick} />
            </div>
        </nav>
    )
}