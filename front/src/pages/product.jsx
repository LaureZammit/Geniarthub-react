import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Footer } from "../components/footer"
import { Header } from "../components/header"

import '../styles/base.css'
import '../styles/product.css'

function Product() {
    document.body.classList.add('page')

    // Utiliser useParams pour récupérer l'id du produit
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [selectedFormat, setSelectedFormat] = useState("");
    const [displayedPrice, setDisplayedPrice] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
                setData(data);
                setDisplayedPrice(data.declinaisons[0].prix);
            })
        .catch(error => console.error(error));
    }, [id]);

    const handleFormatChange = (e) => {
        const selectedFormat = e.target.value;
        setSelectedFormat(selectedFormat);

        const selectedDeclinaison = data.declinaisons.find(
            (declinaison) => declinaison.taille === selectedFormat
        );

        if (selectedDeclinaison) {
            setDisplayedPrice(selectedDeclinaison.prix ? `${selectedDeclinaison.prix}` : "Prix non disponible");
        }
    };

    const handleAddToCart = () => {
        if (quantity >= 1 && selectedFormat && quantity <= 100) {
            const produit = {
                id: data._id,
                titre: data.titre,
                image: data.image,
                quantite: parseInt(quantity),
                format: selectedFormat,
                prix: displayedPrice,
            };

            const updatedCart = [...cart, produit];

            setCart(updatedCart);

        } else {
            alert("Veuillez sélectionner une quantité et un format valide.");
        }
    }

    return(
        <>
            <Header />

            <section className="detailoeuvre">
                <article>
                    <figure> 
                        <img 
                            id="image-oeuvre" 
                            src={data.image} 
                            alt={data.titre} />
                    </figure>
                    <div>
                        <h1>{data.titre}</h1>
                        <p id="little-paragraphe">
                            {data?.description?.substring(0, 200) + "..."}
                        </p>
                        <div className="price">
                            <p>Acheter pour</p>
                            <span className="showprice">
                                {displayedPrice} €
                            </span>
                        </div>
                        <div className="declinaison">
                            <input 
                                id="quantity" 
                                type="number" 
                                name="quantity" 
                                placeholder="1" 
                                defaultValue="1" 
                                minLength="1"
                                onChange={(e) => setQuantity(e.target.value)} />
                            <select 
                                name="format" 
                                id="format" 
                                onChange={handleFormatChange}>
                                    {data.declinaisons && data.declinaisons.map((el, index) => (
                                        <option key={index} value={el.taille}>Format : {el.taille}</option>
                                    ))}
                            </select>
                        </div>
                        <Link 
                            className="button-buy" 
                            onClick={handleAddToCart}>
                                Buy {data.shorttitle}
                        </Link>
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