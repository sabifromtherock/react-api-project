import "./BeerCard.scss";

type BeerCardProps = {
  url: string;
  name: string;
  variable: string;
};

const BeerCard = ({ url, name, variable }: BeerCardProps) => {
  return (
    <div className={`beer-card  ${variable}`}>
      <img
        className="beer-card__image"
        src={url}
        alt={`Picture of a ${name}`}
      />
      <h3 className="beer-card__name">{name}</h3>
    </div>
  );
};

export default BeerCard;
