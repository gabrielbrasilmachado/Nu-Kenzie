import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import MainHomepage from "./components/MainHomepage";

const App = () => {
  const [listTransitions, setListTransitions] = useState([]);
  const [auxListTransitions, setAuxListTransitions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <>
      <MainHomepage
        listTransitions={listTransitions}
        setListTransitions={setListTransitions}
        setIsLoggedIn={setIsLoggedIn}
        auxListTransitions={auxListTransitions}
        setAuxListTransitions={setAuxListTransitions}
      />
    </>
  ) : (
    <>
      <LandingPage setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};

export default App;
