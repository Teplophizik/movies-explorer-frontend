import { useState, useMemo, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { CurrentUserContext } from "./contexts/CurrentUserContext";

import Routes from "./routes";
import { mainApi } from "./utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, toggleLoggedIn] = useState(true);

  const tokenCheck = () => {
    mainApi
      .tokenCheck()
      .then((data) => {
        setCurrentUser(data);
        toggleLoggedIn(true);
      })
      .catch(() => {
        setCurrentUser({});
        toggleLoggedIn(false);
      });
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  const CurrentUserValue = useMemo(
    () => ({ currentUser, setCurrentUser, isLoggedIn, toggleLoggedIn }),
    [currentUser, isLoggedIn]
  );

  return (
    <CurrentUserContext.Provider value={CurrentUserValue}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
