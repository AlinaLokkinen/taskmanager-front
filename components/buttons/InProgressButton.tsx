import { Link } from "react-router";
import wip from "../../icons/wip.png";

const InProgressButton = () => {
  return (
    <div>
      <Link
        className="flex flex-col items-center font-semibold"
        to={"/inprogress"}
      >
        <img className="h-20" src={wip} />
        <p>In progress</p>
      </Link>
    </div>
  );
};

export default InProgressButton;
