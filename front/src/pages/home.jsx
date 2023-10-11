import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Footer } from '../components/footer';
import Card from '../components/card';

import logowhite from "/img/logo-white.png";
import logoblack from "/img/logo-black.png";
import imgcart from "/img/cart.svg";

import '../styles/base.css'
import '../styles/header.css'
import '../styles/home.css'


function Home() {

    document.body.classList.remove('page')

    // CARD
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            setDatas(data);
        })
        .catch(error => console.error(error));
    }, []);

    return(
        <>
            <header>
                <div className="row">
                    <Link href={Home}>
                        <img src={logowhite} alt="Logo du site GeniArtHub" />
                    </Link>
                </div>
            </header>

            <section className="hero">
                <div className="row">
                    <h1>Explorez l'AI-magination artistique</h1>
                    <Link to="#aiartshop">AI Art Shop</Link>
                </div>
            </section>

            <section id="aiartshop" className="productlist">
                <div>
                    <img src={logoblack} alt="Logo GeniArtHub version sombre" />
                    <Link id="carticon" to="cart.jsx"><img src={imgcart} alt="Aller au panier" /></Link>
                </div>

                <section className="products">
                    {/* Faire un map de data */}
                    {datas.map(data => {
                        return (
                            <Card
                                key={data._id}
                                image={data.image}
                                shorttitle={data.shorttitle}
                                titre={data.titre}
                                id={data._id}
                            />
                        )
                    })}
                </section>
                
            </section>
            <Footer />
        </>
    )
}

export default Home;