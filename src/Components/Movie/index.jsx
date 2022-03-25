import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Footer from "../Footer/Footer";

import "./movie.css";

function Movie() {
    const {movieID}= useParams();
    const [movie, setMovie]= useState({});

    useEffect(()=>{
        const promisse = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`
        );
        promisse.then(dataObject=>{
            const data = dataObject.data;
            setMovie(data);
        });
    },[]);

    
    return (
        <>
            <section className="page movie">
                <div className="description">
                    <h2>Selecione o horário</h2>
                </div>
                <img src={movie.posterURL} alt="" />
            </section>
            <Footer imageURL = {movie.posterURL}/>
        </>
    );
}
export default Movie;