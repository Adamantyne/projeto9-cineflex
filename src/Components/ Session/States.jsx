function States(props) {
    const {
        id, name, seatstate, setStateSeat, selectingSeat, setUserInfo, userInfo
    } = props;

    if (seatstate.status === true && seatstate.selected === false) {
        return (
            <div className="seat"
                onClick={() => selectingSeat(seatstate, setStateSeat, id, setUserInfo, userInfo, name)}>
                <p>{name}</p>
            </div>
        );
    }
    else if (seatstate.status === true && seatstate.selected === true) {
        return (
            <div className="seat"
                onClick={() => selectingSeat(seatstate, setStateSeat, id, setUserInfo, userInfo, name)}
                style={{ backgroundColor: "#8DD7CF", border: "1px solid #1AAE9E" }}>
                <p>{name}</p>
            </div>
        );
    }
    else {
        return (
            <div className="seat"
                onClick={() => alert("Esse assento não está disponível")}
                style={{ backgroundColor: "#FBE192", border: "1px solid #F7C52B" }}>
                <p>{name}</p>
            </div>
        );
    }

}


export default States;