import logo_nantes from '../images/logo_nantes.png';
import footer3 from '../images/footer3.png';

function Footer() {
    return (
        <footer>
            <div className="foot">
                <div className="footerImage">
                    <img src={footer3} alt="" />
                </div>

                <div className="footerContent">
                    <a href="https://shodo.io/">
                        <img className="footerLogo" src={logo_nantes} alt="Logo Shodo Nantes" />
                    </a>
                    <h3>Shodo Goodies</h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
