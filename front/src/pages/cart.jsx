import { useEffect, useState } from "react"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

import '../styles/base.css'
import '../styles/cart.css'
import { useCart } from "../components/cartcontext"
import { Link } from "react-router-dom"

function Cart() {
    document.body.classList.add('page')

    // const rowcart = document.querySelector("#row-cart");

    // Récupérer le panier avec le cartContext
    const { cart } = useCart();

    const [cartContent, setCartContent] = useState(null);
    const { temporaryCart, setTemporaryCart } = useState();

    // Utiliser useEffect pour mettre à jour le panier
    useEffect(() => {
        // Variable pour contenir le contenu du panier
        let newCartContent;
        
        cart.forEach((item) => {
            fetch(`http://localhost:3000/api/products/${item.id}`)
            .then(response => response.json())
            .then(data => {
                item.product = data;
                item.price = data.declinaisons.find(item => item.taille === item.format).prix;
                setTemporaryCart([...temporaryCart, item])
            })
            .catch(error => console.error(error));
        })

        // Si le panier est vide, afficher un message et un bouton pour retourner à l'accueil
        if(cart.length === 0) {
            newCartContent = (
                <div>
                    <p>Votre panier est vide</p>
                </div>
            );
        } else {
            // Si le panier n'est pas vide, afficher le contenu du panier
            newCartContent = (
                <div id="row-cart">
                    {cart.map((item) => (
                        <article className="flex-cart" key={item.id}>
                            <img src={item.image} alt={item.nom} />
                            <h3>{item.nom}</h3>
                            <p>Format : {item.format}</p>
                            <p className="price">{item.prix}€</p>
                            <div>
                                <p>Quantité : </p>
                                <input type="number" data-id={item.id} data-format={item.format} defaultValue={item.quantity} />
                            </div>
                            <Link onClick={() => handleDelete(item.id, item.format)}>Supprimer</Link>
                        </article>
                    ))}
                </div>
            )
        }
        setCartContent(newCartContent);
    }, [cart]);

    function handleDelete(id, format) {
        // Faire une copie du panier
        const newCart = [...cart];

        // On récupère l'index de l'item à supprimer
        const productIndex = newCart.findIndex((item) => item.id === id && item.format === format);

        // On supprime l'item du tableau
        newCart.splice(productIndex, 1);
        // On met à jour le state
        setTemporaryCart(newCart);
    }

        return(
            <>
            <Header />
            <main>
                <section id="section-cart">
                    <h1>Votre panier</h1>
                    {cartContent}

                    <div id="totalCart">
                        <h2>Total de la commande</h2>
                        <p><span id="totalArticles">0</span> articles pour un montant de <span id="prixArticles">0</span>€</p>
                    </div>
                </section>

                <section id="section-cart-form">
                    <h2>Formulaire de commande</h2>
                    <form id="cart-form" action="#section-cart-form" method="post">
                        <div id="cart-form-grid">
                            <div>
                                <label htmlFor="prenom">Prénom :</label>
                                <input id="prenom" type="text" name="prenom"/>
                            </div>
                            <div>
                                <label htmlFor="nom">Nom :</label>
                                <input id="nom" type="text" name="nom"/>
                            </div>
                            <div>
                                <label htmlFor="adresse">Adresse :</label>
                                <input id="adresse" type="text" name="adresse"/>
                            </div>
                            <div>
                                <label htmlFor="ville">Ville :</label>
                                <input id="ville" type="text" name="ville"/>
                            </div>
                            <div>
                                <label htmlFor="email">Email :</label>
                                <input id="mail" type="mail" name="email"/>
                            </div>
                        </div>

                        <div id="cart-div-submit">
                            <input id="cart-submit" type="submit" value="Passer commande"/>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
            </>
    )
}

export default Cart