import { Link } from "react-router-dom";

function Card(props) {
    return (
        <article>
            <img src={props.image} alt={props.titre} />
            <Link to={`/product/${props.id}`}>
                Buy {props.shorttitle}
            </Link>
        </article>
    );
}

export default Card;