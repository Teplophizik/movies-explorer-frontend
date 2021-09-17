import { useContext } from "react";
import { useHistory } from "react-router";
import Logo from "../../../components/UI/Logo";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "./auth.css";

export default function AuthLayout({ children }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const history = useHistory();

  if (isLoggedIn) {
    history.push("/");
  }

  return (
    <main className="auth-main">
      <Logo />
      {children}
    </main>
  );
}
