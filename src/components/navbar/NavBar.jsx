import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const cartIconStyle = { color: "#1f4b51" };

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Auchan</a>
                <FontAwesomeIcon icon={faShoppingCart} style={cartIconStyle} />

            </div>
        </nav>
    )
}