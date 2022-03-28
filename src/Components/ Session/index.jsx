import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Footer from "../Footer";
import States from "./States";
import Informations from "./Informations";
import Description from "./Description";
import Form from "./Form";

import "./session.css";

function Session(props) {
    const { setInfoSuccess } = props;
    const [currentSeats, setSeat] = useState("");
    const [userInfo, setUserInfo] = useState({ ids: [], name: "", cpf: "", number: [] });
    const { sessionID } = useParams();
    const navigate = useNavigate();
    const { seats, movie, day, name } = currentSeats;

    useEffect(() => {
        const promisse = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`
        );
        promisse.then(dataObject => {
            const data = dataObject.data;
            setSeat(data);
        });
        promisse.catch(error => {
            console.log(error.response);
        });
    }, []);

    function submitData(event) {
        event.preventDefault();
        const testCPF = parseInt(userInfo.cpf) * 0;
        if (testCPF !== 0) {
            alert("Selecione um cpf válido ...");
        }
        else if (userInfo.ids.length <= 0) {
            alert("Selecione pelo menos um assento ...");
        }
        else {
            post();
        }
    }

    function post() {
        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', {
            ids: userInfo.ids,
            name: userInfo.name,
            cpf: userInfo.cpf
        })
            .then(function (response) {
                //console.log(response);
                setInfoSuccess({
                    title: movie.title,
                    session: `${day.date} ${name}`,
                    tickets: userInfo.number,
                    name: userInfo.name,
                    cpf: userInfo.cpf
                });
                navigate("/success");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            {currentSeats === "" ? <></> :
                <>
                    <div className="page session">
                        <Description />
                        <section className="seats">
                            {seats.map(seat => {
                                const { id, name, isAvailable } = seat;
                                return (<SeatState
                                    key={name + id}
                                    id={id}
                                    name={name}
                                    isAvailable={isAvailable}
                                    selectingSeat={selectingSeat}
                                    setUserInfo={setUserInfo}
                                    userInfo={userInfo}
                                />);
                            })}
                        </section>
                        <Informations />
                        <Form
                            submitData={submitData}
                            setUserInfo={setUserInfo}
                            userInfo={userInfo}
                        />
                    </div>
                    <Footer
                        imageURL={movie.posterURL}
                        titleMovie={movie.title}
                        infoMovie={day.weekday + " - " + name}
                    />
                </>
            }
        </>
    );
}

function SeatState(props) {
    const { id, name, isAvailable, selectingSeat, setUserInfo, userInfo } = props;
    const [seatstate, setStateSeat] = useState({ status: isAvailable, selected: false });

    return (<States
        id={id}
        name={name}
        selectingSeat={selectingSeat}
        seatstate={seatstate}
        setStateSeat={setStateSeat}
        setUserInfo={setUserInfo}
        userInfo={userInfo}
    />);
}

function selectingSeat(seatstate, setStateSeat, id, setUserInfo, userInfo, name) {
    if (seatstate.selected === false) {
        setStateSeat({ ...seatstate, selected: true })
        setUserInfo({ ...userInfo, ids: [...userInfo.ids, id], number: [...userInfo.number, name] });
    }
    else if (seatstate.selected === true) {
        setStateSeat({ ...seatstate, selected: false })
        const idDeselected = userInfo.ids.filter(isSelected => {
            if (isSelected !== id) {
                return true;
            }
            return false;
        });
        const numberDeselected = userInfo.number.filter(isSelected => {
            if (isSelected !== name) {
                return true;
            }
            return false;
        });
        setUserInfo({ ...userInfo, ids: [...idDeselected], number: [...numberDeselected] });
    }
}
export default Session;