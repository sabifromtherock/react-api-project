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
  const lastPage = Math.ceil(beers.length / 10);
  const firstBeerToDisplay = (currentPage - 1) * 10;
  const currentBeers = beers.slice(firstBeerToDisplay, firstBeerToDisplay + 10);

  return (
    <div className="beer-container">
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
      <div className="beer-container__beers">
        {currentBeers.map((beer) => {
          return <BeerCard key={beer.id} beer={beer} variant={""} />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
    </div>
  );
};

export default BeerContainer;
