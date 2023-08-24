import "./PopupHelp.scss";

type PopupHelpProps = {
  text: string;
  imageUrl?: string;
};

const PopupHelp: React.FC<PopupHelpProps> = ({ text, imageUrl }) => {
  return (
    <div className="popup">
      <span className="popup__sign">?</span>
      <div className="popup__content">
        <p className="popup__text">{text}</p>
        {imageUrl && <img className="popup__image" src={imageUrl} alt="Help" />}
      </div>
    </div>
  );
};

export default PopupHelp;
