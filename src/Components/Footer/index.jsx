import "./footer.css"

function Footer(props) {
    const{imageURL, titleMovie, infoMovie}=props;
    return (
        <footer>
            <div>
                <figure>
                    <img src={imageURL} alt="teste" />
                </figure>
                <p>{titleMovie}<br />{infoMovie}</p> 
            </div>
        </footer>
    );
}
export default Footer;