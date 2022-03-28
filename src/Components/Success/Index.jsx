import "./success.css"
import { Link } from "react-router-dom";

function Success(props) {
    const { infoSuccess } = props;
    const { title, session, tickets, name, cpf } = infoSuccess;
    return (
        <section className="page success">
            <div className="description">
                <h2>Pedido feito <br /> com sucesso!</h2>
            </div>
            <section className="purchase-info">
                <h3>Filme e sessão</h3>
                <p>{title} <br /> {session}</p>
                <h3>Ingressos</h3>
                {tickets.map(ticket => {
                    return (
                        <p key={ticket}>Assento {ticket}</p>
                    );
                })}
                <h3>Comprador</h3>
                <p>Nome:{name}</p>
                <p>CPF:{cpf}</p>
            </section>
            <Link to={"/"}>
                <button>Voltar pra Home</button>
            </Link>
        </section>
    );
}
export default Success;