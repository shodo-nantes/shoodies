import logo_nantes from "../images/logo_nantes.png";
import rightToBracketImage from "../images/right-to-bracket-solid.svg";
import paint_black from "../images/paint_black.png";

function Header() {
  return (
    <header>
      <div className="core">
        <a href="./index.html">
          <img className="headerLogo" src={logo_nantes} alt="Logo Shodo" />
        </a>
        <h3 className="headerText">
          OH MY <br /> GOODIES
        </h3>
        <div className="connection">
          <a href="https://www.google.com/intl/fr/gmail/about/">
            <img src={rightToBracketImage} alt="Connection symbol" />
          </a>
        </div>
      </div>

      <div className="paint">
        <img className="paint" src={paint_black} alt="Paint" />
      </div>
    </header>
  );
}

export default Header;
