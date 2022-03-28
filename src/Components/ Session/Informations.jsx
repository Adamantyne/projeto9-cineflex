function Informations() {
    const informations = [{
        status: "Selecionado",
        color: "#8DD7CF",
        border: "1px solid #1AAE9E"
    }, {
        status: "Disponível",
        color: "#C3CFD9",
        border: "1px solid #7B8B99"
    }, {
        status: "Indisponível",
        color: "#FBE192",
        border: "1px solid #F7C52B"
    }];

    return (
        <section className="informations">
            {informations.map((information) => {
                const { status, color, border } = information;
                return (<Information
                    key={color + status}
                    status={status}
                    color={color}
                    border={border}
                />);
            })}
        </section>
    );
}
function Information(props) {
    const { status, color, border } = props;
    return (
        <article className="information">
            <div className="seat"
                style={{ backgroundColor: color, border: border }}>
            </div>
            <p>{status}</p>
        </article>
    );
}
export default Informations;