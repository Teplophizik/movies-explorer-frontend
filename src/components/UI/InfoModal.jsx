import { useEffect } from "react";
import "./InfoModal.css";

export default function InfoModal({ info, setInfoNull }) {
  const close = () => {
    setInfoNull({});
  };

  useEffect(() => {
    const closeTimeout = setTimeout(() => {
      setInfoNull({});
    }, 2000);
    return () => {
      clearTimeout(closeTimeout);
    };
  }, []);

  return (
    <div className={`info-modal info-modal_${info.status}`}>
      <span className="info-modal__close-btn" onClick={close}>
        x
      </span>
      <span>{info.message}</span>
    </div>
  );
}
