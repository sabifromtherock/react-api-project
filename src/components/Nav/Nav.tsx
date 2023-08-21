import { useState } from "react";
import Search from "../Search/Search";
import "./Nav.scss";
import whiteCross from "../../assets/images/white-cross.png";
import FilterList from "../FilterList/FilterList";
import { Link } from "react-router-dom";

type NavProps = {
  setSearchTerm: (searchTerm: string) => void;
  selectedFilter: string;
  setSelectedFilter: (selectedFilter: string) => void;
};

const Nav = ({
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
}: NavProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="nav">
      <div className="nav__home">
        <h1 className="nav__header">Welcome to HopER</h1>
        <Link className="nav__home-button" to={"/"}>
          Home
        </Link>
      </div>
      {!isClicked && (
        <p onClick={handleClick} className="nav__title">
          Filters
        </p>
      )}
      {isClicked && (
        <div className="nav__filters">
          <img
            className="nav__close"
            src={whiteCross}
            alt="close filters"
            onClick={handleClick}
          />
          <Search setSearchTerm={setSearchTerm} />
          <FilterList
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
      )}
    </div>
  );
};

export default Nav;
