import Filters from "../Filters";
import Form from "../Form";
import TotalMoney from "../TotalMoney";
import Header from "../Header";
import TransitionsListRender from "../TransitionsList";

const MainHomepage = ({
  listTransitions,
  setListTransitions,
  setIsLoggedIn,
  auxListTransitions,
  setAuxListTransitions,
}) => {
  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <main id="main" className="container">
        <section className="formSection">
          <Form
            listTransitions={listTransitions}
            setListTransitions={setListTransitions}
          ></Form>
          {listTransitions.length === 0 ? (
            <div></div>
          ) : (
            <TotalMoney listTransitions={listTransitions}></TotalMoney>
          )}
        </section>
        <section className="listSection">
          <Filters
            listTransitions={listTransitions}
            setListTransitions={setListTransitions}
            auxListTransitions={auxListTransitions}
            setAuxListTransitions={setAuxListTransitions}
          />
          <TransitionsListRender
            listTransitions={listTransitions}
            setListTransitions={setListTransitions}
            auxListTransitions={auxListTransitions}
          />
        </section>
      </main>
    </>
  );
};

export default MainHomepage;
