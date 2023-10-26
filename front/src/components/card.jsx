import { Link } from "react-router-dom";

function Card(props) {
    // Récupérer les données envoyées depuis le composant parent
    // et les stocker dans des constantes
    const titre = props.titre;
    const image = props.image;
    const id = props.id;
    const shorttitle = props.shorttitle;

    // Afficher les données dans le composant
    return (
        <article>
            <img src={image} alt={titre} />
            <Link to={`/product/${id}`}>
                Buy {shorttitle}
            </Link>
        </article>
    );
}

export default Card;