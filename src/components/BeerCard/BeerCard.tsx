import { Link } from "react-router-dom";
import { Beer } from "../../types/Beer";
import placeHolderImage from "../../assets/images/bottle.png";
import "./BeerCard.scss";
import PopupHelp from "../PopupHelp/PopupHelp";
import phImage from "../../assets/images/ph.png";

type BeerCardProps = {
  beer: Beer;
  variant: string;
};

const BeerCard = ({ beer, variant }: BeerCardProps) => {
  const abvText =
    "ABV stands for alcohol by volume. The number represents the total volume of liquid in a beer that is made up of alcohol. So, the higher the ABV, the more alcoholic the drink.";
  const phText =
    "Below are the different pH levels for different beers, listed from most acidic to least acidic:";

  let url = beer.image_url;

  if (!url) url = placeHolderImage;

  return (
    <Link to={`/beer/${beer.id}`} className={`beer-card  ${variant}`}>
      <img
        className="beer-card__image"
        src={url}
        alt={`Picture of a ${beer.name}`}
      />
      <h3 className="beer-card__name">
        <strong>Name: </strong> {beer.name}
      </h3>
      <p className="beer-card__paragraph">
        <strong>First Brewed: </strong> {beer.first_brewed}
      </p>
      <div>
        <span className="beer-card__paragraph">
          <strong>ABV: </strong> {`${beer.abv}  `}
        </span>
        <PopupHelp text={abvText} />
      </div>
      <div>
        <span className="beer-card__paragraph">
          <strong>pH: </strong>
          {`${beer.ph}  `}
        </span>
        <PopupHelp text={phText} imageUrl={phImage} />
      </div>
    </Link>
  );
};

export default BeerCard;
