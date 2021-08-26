import MoviesCardList from "../components/MoviesCardList";
import Search from "../components/Search";

import "./Movies.css";

import mockImg from "../images/mock-img.png";
import mockImg2 from "../images/mock-img2.png";

export default function Movies() {
  const mockData = [
    {
      title: "33 слова о дизайне",
      img: mockImg,
      duration: "142",
      label: "false",
    },
    {
      title: "34 слова о дизайне",
      img: mockImg,
      duration: "143",
      label: "false",
    },
    {
      title: "32 слова о дизайне",
      img: mockImg2,
      duration: "144",
      label: "true",
    },
    {
      title: "43 слова о дизайне",
      img: mockImg,
      duration: "144",
      label: "false",
    },
    {
      title: "42 слова о дизайне",
      img: mockImg,
      duration: "144",
      label: "false",
    },
  ];

  return (
    <>
      <Search />
      <MoviesCardList cards={mockData} />
      <button className="movies__btn">Ещё</button>
    </>
  );
}
