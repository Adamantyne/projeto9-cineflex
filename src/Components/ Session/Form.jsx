function Form(props) {
    const{submitData,setUserInfo,userInfo}=props;
    return (
        <form onSubmit={(event) => submitData(event)}>
            <label htmlFor="name">Nome do comprador:</label>

            <input required id="name" name="name" type="text" placeholder="digite seu nome..."
                onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
                value={userInfo.name} />

            <label required htmlFor="cpf">CPF do comprador:</label>

            <input id="cpf" name="cpf" type="text" placeholder="digite seu cpf..."
                onChange={e => setUserInfo({ ...userInfo, cpf: e.target.value })}
                value={userInfo.cpf} maxLength="11" minLength={11} />

            <button type="submit">Reservar assento(s)</button>
        </form>
    );
}
export default Form;