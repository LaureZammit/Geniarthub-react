import { Link } from "react-router-dom";

import logoblack from "/img/logo-black.png";
import imgcart from "/img/cart.svg";

import '../styles/header.css'
import '../styles/cart.css'
import { useCart } from "./cartcontext";

export function Header() {
    // Afficher dans le span dans #carticon le nombre d'articles dans le panier avec un datacontext
    const carticonspan = document.querySelector("#carticon span");

    // IF le panier est vide ALORS afficher 0 SINON afficher le nombre d'articles dans carticonspan
    // if(!carticonspan) {
    //     return;
    // } else if(CartProvider() === 0) {
    //     carticonspan.innerText = 0;
    // } else {
    //     carticonspan.innerText = CartProvider();
    // }

    const { getTotalQuantity } = useCart();

    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logoblack} alt="Logo GeniArtHub version sombre" />
                </Link>
                <Link id="carticon" to="/cart">
                    <span>{getTotalQuantity()}</span>
                    <img src={imgcart} alt="Aller au panier" />
                </Link>
            </div>
        </header>
    );
}