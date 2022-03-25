import "./footer.css"

function Footer(props) {
    const{imageURL}=props;
    return (
        <footer>
            <div>
                <figure>
                    <img src={imageURL} alt="teste" />
                </figure>
                <p>filminho marotoso</p>
            </div>
        </footer>
    );
}
export default Footer;