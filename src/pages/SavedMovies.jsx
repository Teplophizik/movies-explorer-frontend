import MoviesCardList from "../components/MoviesCardList";
import Search from "../components/Search";

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
      title: "42 слова о дизайне",
      img: mockImg2,
      duration: "144",
      label: "false",
    },
  ];

  return (
    <>
      <Search />
      <MoviesCardList cards={mockData} />
    </>
  );
}
