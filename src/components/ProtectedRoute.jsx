import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ProtectedRoute = ({ children: Component }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);

  return <Route>{() => (isLoggedIn ? Component : <Redirect to="/" />)}</Route>;
};

export default ProtectedRoute;
