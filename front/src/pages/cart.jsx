import { Footer } from "../components/footer"
import { Header } from "../components/header"

import '../styles/base.css'
import '../styles/cart.css'

function Cart() {
    document.body.classList.add('page')
    
    return(
        <>
            <Header />
            <main>
                <section id="section-cart">
                    <h1>Votre panier</h1>
                    <div id="row-cart">
                    </div>
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