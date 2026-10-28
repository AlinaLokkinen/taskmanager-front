import type Task from "../../types/Task";
import done from "../../icons/done.png";
import { Link } from "react-router";

const DoneButton = ({ task }: { task: Task }) => {
  return (
    <div>
      <Link className="flex flex-col items-center font-semibold" to={"/done"}>
        <img className="h-20" src={done} />
        <p>Done</p>
      </Link>
    </div>
  );
};

export default DoneButton;
