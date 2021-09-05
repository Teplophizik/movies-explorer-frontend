import Logo from "../../../components/UI/Logo";
import "./auth.css";

export default function AuthLayout({ children }) {
  return (
    <main className="auth-main">
      <Logo />
      {children}
    </main>
  );
}
