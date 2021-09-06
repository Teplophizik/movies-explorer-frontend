import "./MoviesListMessage.css";

export default function MoviesListMessage({ text, setError }) {
  const close = () => {
    setError("");
  };
  return (
    <div className="movies-list-message">
      <span className="movies-list-message__close-btn" onClick={close}>
        x
      </span>
      <span>{text}</span>
    </div>
  );
}
