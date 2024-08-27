import "./Movie.css";
import data from "../data";
import MovieDeleteButton from "./MovieDeleteButton";
import AllDeleteButton from "./AllDeleteButton";
import { useState } from "react";
import ReloudMovieButton from "./ReloudMovieButton";

const Movie = () => {
    const [movieList, setMovieList] = useState(data);
    const deleteOneMovie = (id) => {
        const filteredMovies = movieList.filter((oneMovie) => {
            return oneMovie.id !== id;
        });
        setMovieList(filteredMovies);
    }
    const deleteAllMovies = () => {
        setMovieList([]);
    }
    const setAllMovies = () => {
        setMovieList(data);
    }

    return <section>
        <div class="all-movies">
            {
                movieList.map((oneMovie) => {
                    const { id, image, title, age, tags, description } = oneMovie;
                    return <div key={id} className="one-movie">
                        <img src={image} alt={title} />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />
                    </div>
                })
            }
        </div>
        <div class="button-box">
            <AllDeleteButton deleteAllMovies={deleteAllMovies} />
            <ReloudMovieButton ReloudAllMovies={setAllMovies} />
        </div>
    </section>;
};

export default Movie;