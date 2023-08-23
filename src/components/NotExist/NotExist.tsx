import { Link } from "react-router-dom";
import "./NotExist.scss";

const NotExist = () => {
  return (
    <Link to={"/"} className="not-exist">
      Content not found
      <br />
      Click Me!
    </Link>
  );
};

export default NotExist;
