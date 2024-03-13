import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import Cards from "../card/card";

const SearchResults = () => {
    const { term } = useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=129924d470c309daa2e757732cb3d897&language=pt-BR&query=${term}`)
            .then((res) => res.json())
            .then((data) => setSearchResults(data.results));
    }, [term]);

    return (
        <div className="movie_list">
            <h2 className="list_title">Resultados para "{term}"</h2>
            <div className="list_cards">
                {searchResults.map((movie) => (
                    <Cards key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;