import { useLocation } from "react-router-dom";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function DefaultLayout({ children }) {
  const location = useLocation();
  return (
    <>
      <Header
        bgcolor={location.pathname === "/" ? "light" : "dark"}
        isLogged={false}
      />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
