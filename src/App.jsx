import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import MainHomepage from "./components/MainHomepage";

const App = () => {
  const [listTransitions, setListTransitions] = useState([]);
  const [auxListTransitions, setAuxListTransitions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [transitionType, setTransitionType] = useState("all");

  const filterAll = () => {
    setTransitionType("todos");
    setAuxListTransitions([]);
  };

  useEffect(() => {
    filterAll();
  }, [listTransitions]);

  return isLoggedIn ? (
    <>
      <MainHomepage
        listTransitions={listTransitions}
        setListTransitions={setListTransitions}
        setIsLoggedIn={setIsLoggedIn}
        auxListTransitions={auxListTransitions}
        setAuxListTransitions={setAuxListTransitions}
        transitionType={transitionType}
        setTransitionType={setTransitionType}
        filterAll={filterAll}
      />
    </>
  ) : (
    <>
      <LandingPage setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};

export default App;
