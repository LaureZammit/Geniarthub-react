import { Link } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";

import logo from "/img/logo-black.png";
import imgcart from "/img/cart.svg";

import '../styles/header.css'

export function Header() {
    return (
        <header>
            <div>
                <Link to={Home}>
                    <img src={logo} alt="Logo GeniArtHub version sombre" />
                </Link>
                <Link id="carticon" to={Cart}>
                    <img src={imgcart} alt="Aller au panier" />
                </Link>
            </div>
        </header>
    );
}
