import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Footer from "../Footer";

import "./movie.css";

function Movie() {
    const { movieID } = useParams();
    const [movie, setMovie] = useState("");
    const { posterURL, days,title} = movie;

    useEffect(() => {
        const promisse = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`
        );
        promisse.then(dataObject => {
            const data = dataObject.data;
            setMovie(data);
        });
        promisse.catch(error => {
            console.log(error.response);
        });
    }, []);


    return (
        <>
            {movie === "" ? <></> :
                <>
                    <section className="page movie">
                        <div className="description">
                            <h2>Selecione o horário</h2>
                        </div>

                        {days.map(day => {
                            const { id: idDay, weekday, date, showtimes } = day;
                            return (<DaysMovie
                                key={idDay + date}
                                idDay={idDay}
                                weekday={weekday}
                                date={date}
                                showtimes={showtimes} />);
                        })}
                    </section>
                    <Footer imageURL={posterURL} titleMovie= {title}/>
                </>
            }
        </>
    );
}

function DaysMovie(props) {
    const { weekday, date, showtimes } = props;
    return (
        <article className="days">
            <p>{weekday} - {date}</p>
            <div className="showtimes">
                {showtimes.map(showtime => {
                    const { name: hour, id: idHour } = showtime;
                    return (
                        <HourMovie key={hour + idHour} hour={hour} idHour={idHour} />
                    );
                })}
            </div>
        </article>
    );
}
function HourMovie(props) {
    const { hour, idHour } = props;
    return (
        <Link to={`/session/${idHour}`}>
            <div className="hour">
                <p>{hour}</p>
            </div>
        </Link>
    );
}
export default Movie;