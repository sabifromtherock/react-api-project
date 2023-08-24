import "./BeerDetails.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Beer } from "../../types/Beer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

type BeerDetailsProps = {
  beers: Beer[];
  setIsBeerDetailsLoaded: (isLoaded: boolean) => void;
};

const BeerDetails = ({ beers, setIsBeerDetailsLoaded }: BeerDetailsProps) => {
  const { id } = useParams();
  const beer = beers.find((beer) => beer.id === Number(id));

  useEffect(() => {
    setIsBeerDetailsLoaded(true);
  }, [setIsBeerDetailsLoaded]);

  if (!beer)
    return (
      <p className="beer-details__id-not-found">
        ID not found
        <br />
        Click on Home
      </p>
    );

  return (
    <div className="beer-details">
      <BeerCard beer={beer} variant={"beer-details__card"} />
      <div className="beer-details__content">
        <p className="beer-details__paragraph">
          <strong className="beer-details__title">Description:</strong>{" "}
          {beer.description}
        </p>
        <p className="beer-details__paragraph">
          <strong className="beer-details__title">IBU:</strong> {beer.ibu}
        </p>
        <p className="beer-details__paragraph">
          <strong className="beer-details__title">EBC:</strong> {beer.ebc}
        </p>
        <ul className="beer-details__list">
          <strong className="beer-details__title">Food pairing:</strong>
          {beer.food_pairing.map((food, index) => {
            return (
              <li className="beer-details__item" key={index}>
                {food}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BeerDetails;
