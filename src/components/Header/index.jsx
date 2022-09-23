import "./style.css";
import logo from "../../assets/Logo black.png";

const Header = ({ setIsLoggedIn, img }) => {
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header>
      <div className="container">
        <figure>
          <img src={logo} alt="Logo da kenzie" />
        </figure>
        <button
          className="button2"
          onClick={() => {
            logout();
          }}
          type="button"
        >
          Inicio
        </button>
      </div>
    </header>
  );
};

export default Header;
