import "./ReloudMovieButton.css";

const ReloudMovieButton = (props) => {
    return <button onClick={props.ReloudAllMovies} className="reloud-movies-button">Načíst filmy</button>;
}

export default ReloudMovieButton;