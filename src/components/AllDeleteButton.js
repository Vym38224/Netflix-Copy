import "./AllDeleteButton.css";

const AllDeleteButton = (props) => {
    return (
        <button onClick={props.deleteAllMovies} className="all-delete-button">Vymazat vše</button>
    );
}

export default AllDeleteButton;