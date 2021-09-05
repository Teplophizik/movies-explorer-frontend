import { MainApiUrl, headers } from "./constants";

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = `${window.location.protocol}//${baseUrl}`;
  }

  _getResponseData(res) {
    return res
      .json()
      .then((json) => {
        return res.ok ? json : Promise.reject(json);
      })
      .catch((err) => Promise.reject(err));
  }

  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: headers.json,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((res) => this._getResponseData(res));
  }

  login({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: headers.json,
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    }).then((res) => this._getResponseData(res));
  }

  changeUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: headers.json,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this._getResponseData(res));
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      credentials: "include",
    }).then((res) => this._getResponseData(res));
  }

  tokenCheck() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
    }).then((res) => this._getResponseData(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
    }).then((res) => this._getResponseData(res));
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: headers.json,
      body: JSON.stringify(movie),
      credentials: "include",
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: headers.json,
      credentials: "include",
    }).then((res) => this._getResponseData(res));
  }
}

export const mainApi = new MainApi(MainApiUrl);
