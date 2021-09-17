import { MoviesApiUrl } from "./constants";

class MoviesApi {
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

  getAll() {
    return fetch(this._baseUrl, {
      method: "GET",
    }).then((res) => this._getResponseData(res));
  }
}

export const moviesApi = new MoviesApi(MoviesApiUrl);
