import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Footer } from "../components/footer"
import { Header } from "../components/header"

import '../styles/base.css'
import '../styles/product.css'

function Product() {
    // Utiliser useParams pour récupérer l'id du produit
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
                setData(data);
            })
        .catch(error => console.error(error));
    }, [id]);

    return(
        <>
            <Header />

            <section className="detailoeuvre">
                <article>
                    <figure> 
                        <img id="image-oeuvre" src={data.image} alt={data.titre} />
                    </figure>
                    <div>
                        <h1>{data.titre}</h1>
                        <p id="little-paragraphe">
                            {data?.description?.substring(0, 200) + "..."}
                        </p>
                        <div className="price">
                            <p>Acheter pour</p>
                            <span className="showprice">
                                {data.prix}€
                            </span>
                        </div>
                        <div className="declinaison">
                            <input id="quantity" type="number" name="quantity" placeholder="1" defaultValue="1" minLength="1" />
                            <select name="format" id="format">

                            </select>
                        </div>
                        <Link className="button-buy" href="#"></Link>
                    </div>
                </article>

                <aside>
                    <h2></h2>
                    <p className="description"></p>
                </aside>               
            </section>

            <Footer />
        </>
    )
}

export default Product