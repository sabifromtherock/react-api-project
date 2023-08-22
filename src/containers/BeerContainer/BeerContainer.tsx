import "./BeerContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";
import { Beer } from "../../types/Beer";
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";

type BeerContainerProps = {
  beers: Beer[];
};

const BeerContainer = ({ beers }: BeerContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentBeers = beers.slice(currentPage, currentPage + 10);

  return (
    <div className="beer-container">
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={Math.ceil(beers.length / 10)}
      />
      <div className="beer-container__beers">
        {currentBeers.map((beer) => {
          return (
            <BeerCard
              key={beer.id}
              url={beer.image_url}
              beer={beer}
              variable={""}
            />
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={Math.ceil(beers.length / 10)}
      />
    </div>
  );
};

export default BeerContainer;
