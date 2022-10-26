import Hoc from "../hoc/Hoc";

const Card = (props) => {

    return (
        <div>
            {props.characters.map((character) => {
                return (<div key={character.id}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}></img>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                </div>)
            })}          
        </div>
    )
}

export default Card;

export const WithCard = Hoc(Card);
