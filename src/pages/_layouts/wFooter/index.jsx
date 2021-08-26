import Header from "../../../components/Header";

export default function WFooterLayout({ children }) {
  return (
    <>
      <Header bgcolor="dark" />
      <main className="main">{children}</main>
    </>
  );
}
