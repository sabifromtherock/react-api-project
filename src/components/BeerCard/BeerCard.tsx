import { Link } from "react-router-dom";
import { Beer } from "../../types/Beer";
import placeHolderImage from "../../assets/images/bottle.png";
import "./BeerCard.scss";

type BeerCardProps = {
  beer: Beer;
  variant: string;
};

const BeerCard = ({ beer, variant }: BeerCardProps) => {
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
        <strong>Name:</strong> {beer.name}
      </h3>
      <p className="beer-card__paragraph">
        <strong>First Brewed:</strong> {beer.first_brewed}
      </p>
      <p className="beer-card__paragraph">
        <strong>ABV:</strong> {beer.abv}
      </p>
      <p className="beer-card__paragraph">
        <strong>pH:</strong> {beer.ph}
      </p>
    </Link>
  );
};

export default BeerCard;
