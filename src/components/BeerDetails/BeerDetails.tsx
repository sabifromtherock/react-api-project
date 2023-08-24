import "./BeerDetails.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Beer } from "../../types/Beer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PopupHelp from "../PopupHelp/PopupHelp";
import ibuImage from "../../assets/images/ibu.png";
import ebcImage from "../../assets/images/ebc.png";

type BeerDetailsProps = {
  beers: Beer[];
  setIsBeerDetailsLoaded: (isLoaded: boolean) => void;
};

const BeerDetails = ({ beers, setIsBeerDetailsLoaded }: BeerDetailsProps) => {
  const ibuText =
    "IBU stands for International Bitterness Units, a scale to gauge the level of a beer's bitterness.";
  const ebcText =
    "EBC stands for European Brewery Convention and it's used as a measure of colour intensity. The higher the EBC, the darker the beer. ";
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
          <strong className="beer-details__title">Description:</strong>
          {beer.description}
        </p>
        <div>
          <span className="beer-details__paragraph">
            <strong className="beer-details__title">IBU:</strong>
            {`${beer.ibu}  `}
          </span>
          <PopupHelp text={ibuText} imageUrl={ibuImage} />
        </div>
        <div>
          <span className="beer-details__paragraph">
            <strong className="beer-details__title">EBC:</strong>
            {`${beer.ebc}  `}
          </span>
          <PopupHelp text={ebcText} imageUrl={ebcImage} />
        </div>
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
