import "./style.css";
import logo from "../../assets/Logo white.png";
import illustration from "../../assets/illustration.svg";

const LandingPage = ({ setIsLoggedIn }) => {
  return (
    <main className="mainLandingPage">
      <div className="containerDiv">
        <section className="textsSection">
          <figure>
            <img className="logo" src={logo} alt="" />
          </figure>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
            className="button1"
          >
            Iniciar
          </button>
        </section>
        <section className="imageSection">
          <figure className="imageSection_Figure">
            <img className="illustration" src={illustration} alt="" />
          </figure>
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
