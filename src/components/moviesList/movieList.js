import React, { useEffect, useState } from "react";
import Cards from '../card/card';
import './movieList.css';
import { useParams } from "react-router-dom";

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams;

    useEffect(() => {
        getData()  
    }, [type])
    
    // useEffect(() => {

    // }, [type])

    const getData = () => {
        

        fetch(
            `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=129924d470c309daa2e757732cb3d897&language=pt-BR`
          )
            .then((res) => res.json())
            .then((data) => setMovieList(data.results));
    }

    return (
        <div className="movie_list">
            <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )


}

export default MovieList;
