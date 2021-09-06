import {
  SIZE_CARD_DESKTOP,
  SIZE_CARD_MOBILE,
  SIZE_CARD_TABLET,
  SIZE_MARGIN_MOBILE,
  SIZE_MARGIN_TABLET,
  SIZE_MARGIN_DESKTOP,
} from "./constants";

export const search = (
  array,
  searchString,
  filtered,
  setData,
  setIsLoading
) => {
  setData(
    array.filter((movie) => {
      const nameRU = movie.nameRU || "";
      const nameEN = movie.nameEN || "";
      const regex = new RegExp(searchString, "i");
      if (regex.test(nameRU) || regex.test(nameEN)) {
        if (filtered) {
          if (movie.duration <= 40) {
            return movie;
          }
        } else {
          return movie;
        }
      }
    })
  );
  setIsLoading(false);
};

export const calcPerRow = () => {
  let cardSize = SIZE_CARD_MOBILE;
  let margin = SIZE_MARGIN_MOBILE;
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    cardSize = SIZE_CARD_TABLET;
    margin = SIZE_MARGIN_TABLET;
  } else if (window.innerWidth >= 1280) {
    cardSize = SIZE_CARD_DESKTOP;
    margin = SIZE_MARGIN_DESKTOP;
  }
  return Math.floor(
    (window.innerWidth - margin - ((window.innerWidth - margin) % cardSize)) /
      cardSize
  );
};
