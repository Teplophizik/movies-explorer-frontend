import {
  SIZE_CARD_DESKTOP,
  SIZE_CARD_MOBILE,
  SIZE_CARD_TABLET,
  SIZE_GAP_TABLET,
  SIZE_GAP_DESKTOP,
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
  let gap = 0;
  const windowWidth = window.innerWidth;

  if (windowWidth >= 768 && windowWidth < 1280) {
    cardSize = SIZE_CARD_TABLET;
    margin = SIZE_MARGIN_TABLET;
    gap = SIZE_GAP_TABLET;
  } else if (windowWidth >= 1280) {
    cardSize = SIZE_CARD_DESKTOP;
    margin = SIZE_MARGIN_DESKTOP;
    gap = SIZE_GAP_DESKTOP;
  }

  let perRow = Math.floor(
    (windowWidth - margin - ((windowWidth - margin) % cardSize)) / cardSize
  );

  if (perRow * cardSize + (perRow - 1) * gap + margin > windowWidth) {
    perRow--;
  }

  return perRow;
};
