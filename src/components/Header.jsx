import Navigation from "./Navigation";
import Logo from "./UI/Logo";
import "./Header.css";

export default function Header(props) {
  return (
    <header className={"header header_" + props.bgcolor}>
      <Logo />
      <Navigation />
    </header>
  );
}
