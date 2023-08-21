import { Beer } from "../../types/Beer";
import "./BeerCard.scss";

type BeerCardProps = {
  url: string;
  beer: Beer;
  variable: string;
};

const BeerCard = ({ url, beer, variable }: BeerCardProps) => {
  return (
    <div className={`beer-card  ${variable}`}>
      <img
        className="beer-card__image"
        src={url}
        alt={`Picture of a ${beer.name}`}
      />
      <h3 className="beer-card__name">Name: {beer.name}</h3>
      <p className="beer-card__paragraph">First Brewed: {beer.first_brewed}</p>
      <p className="beer-card__paragraph">ABV: {beer.abv}</p>
      <p className="beer-card__paragraph">pH: {beer.ph}</p>
    </div>
  );
};

export default BeerCard;
