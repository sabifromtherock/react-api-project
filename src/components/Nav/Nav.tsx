import { useState } from "react";
import Search from "../Search/Search";
import "./Nav.scss";
import FilterList from "../FilterList/FilterList";
import { Link } from "react-router-dom";
import downArrow from "../../assets/images/down-arrow.png";
import upArrow from "../../assets/images/up-arrow.png";

type NavProps = {
  setSearchTerm: (searchTerm: string) => void;
  selectedFilter: string;
  setSelectedFilter: (selectedFilter: string) => void;
  isBeerDetailsLoaded: boolean;
  setIsBeerDetailsLoaded: (isBeerDetailsLoaded: boolean) => void;
};

const Nav = ({
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
  isBeerDetailsLoaded,
  setIsBeerDetailsLoaded,
}: NavProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleHomeButtonClick = () => {
    setIsBeerDetailsLoaded(false);
  };

  return (
    <div className="nav">
      <div className="nav__home">
        <h1 className="nav__header">Welcome to Hoppy</h1>
        {isBeerDetailsLoaded && (
          <Link
            onClick={handleHomeButtonClick}
            className="nav__home-button"
            to={"/"}
          >
            Home
          </Link>
        )}
      </div>

      {isBeerDetailsLoaded ? null : !isClicked ? (
        <div className="nav__filters">
          <p onClick={handleClick} className="nav__title">
            Open Filters
            <img className="nav__arrow" src={downArrow} alt="down arrow" />
          </p>
        </div>
      ) : (
        <div className="nav__filters">
          <p onClick={handleClick} className="nav__title">
            Close Filters
            <img className="nav__arrow" src={upArrow} alt="up arrow" />
          </p>
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
