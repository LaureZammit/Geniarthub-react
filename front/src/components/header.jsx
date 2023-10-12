import { Link } from "react-router-dom";

import logoblack from "/img/logo-black.png";
import imgcart from "/img/cart.svg";

import '../styles/header.css'

export function Header() {
    return (
        <header>
            <div>
                <Link href="index.html">
                    <img src={logoblack} alt="Logo GeniArtHub version sombre" />
                </Link>
                <Link id="carticon" href="cart.jsx">
                    <img src={imgcart} alt="Aller au panier" />
                </Link>
            </div>
        </header>
    );
}