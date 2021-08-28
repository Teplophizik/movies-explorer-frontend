import { Link } from "react-router-dom";

import "./AuthLink.css";

export default function AuthLink(props) {
  return (
    <p className="auth-link">
      {props.text}
      <Link className="auth-link__link" to={props.link}>
        {props.textLink}
      </Link>
    </p>
  );
}
