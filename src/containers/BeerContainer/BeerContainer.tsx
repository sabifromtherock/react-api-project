import "./BeerContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";
import { Beer } from "../../types/Beer";

type BeerContainerProps = {
  beers: Beer[];
};

const BeerContainer = ({ beers }: BeerContainerProps) => {
  return (
    <div className="beer-container">
      {beers.map((beer) => {
        return (
          <BeerCard
            key={beer.id}
            url={beer.image_url}
            name={beer.name}
            variable={""}
          />
        );
      })}
    </div>
  );
};

export default BeerContainer;
