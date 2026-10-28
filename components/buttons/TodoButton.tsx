import { Link } from "react-router";
import todo from "../../icons/todo.png";

const TodoButton = () => {
  return (
    <div>
      <Link className="flex flex-col items-center font-semibold" to={"/todos"}>
        <img className="h-20" src={todo} />
        <p>Todo</p>
      </Link>
    </div>
  );
};

export default TodoButton;
