import "./Profile.css";

export default function Profile() {
  const user = {
    name: "Виталий",
    email: "pochta@yandex.ru",
  };
  return (
    <form className="profile">
      <p className="profile__header">Привет, {user.name}!</p>
      <label className="profile__label">
        Имя
        <input
          className="profile__input"
          type="text"
          disabled
          required
          value={user.name}
        />
      </label>
      <label className="profile__label">
        E-mail
        <input
          className="profile__input"
          type="text"
          disabled
          required
          value={user.email}
        />
      </label>
      <button className="profile__edit-btn">Редактировать</button>
      <button className="profile__exit-btn">Выйти из аккаунта</button>
    </form>
  );
}
