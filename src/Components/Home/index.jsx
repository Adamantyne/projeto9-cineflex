import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./home.css";

import loading from "../../assets/image/loading.gif"

function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then(request => {
            const data = request.data;
            //console.log(data);
            setMovies(data);
        });
    }, []);


    if(movies.length===0){
        return(
            <section className="loading"><img src={loading} alt="loading" /></section>
        );
    }
    return (
        <section className="page home">
            <div className="description">
                <h2>Selecione o filme</h2>
            </div>
            {movies.map(movie => {
                const { id, posterURL, overview } = movie;
                return (
                    <MovieFrame key={posterURL+id} id={id} posterURL={posterURL} title={overview} />
                );
            })}
        </section>
    );
}
function MovieFrame(props) {
    const { id, posterURL, title} = props;
    return (
        <Link to={`/movie/${id}`}>
            <figure>
                <img src={posterURL} alt={title} />
            </figure>
        </Link>
    );
}
export default Home;