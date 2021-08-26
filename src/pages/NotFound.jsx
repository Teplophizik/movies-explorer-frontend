import { useHistory } from "react-router-dom";

import "./NotFound.css";

export default function NotFound() {
  const history = useHistory();
  return (
    <div className="not-found">
      <p className="not-found__header">404</p>
      <p className="not-found__text">Страница не найдена</p>
      <button onClick={() => history.goBack()} className="not-found__go-back">
        Назад
      </button>
    </div>
  );
}
