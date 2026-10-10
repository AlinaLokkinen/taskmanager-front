import type Task from "../types/Task";
import TodoButton from "./buttons/TodoButton";
import InProgressButton from "./buttons/InProgressButton";
import DoneButton from "./buttons/DoneButton";

const FrontPageProgressButtons = ({ tasks }: { tasks: Task[] }) => {
  
    const todoCount = tasks.filter((t) => 
     t.taskStatus === "todo").length;

    const inprogressCount = tasks.filter((t) => t.taskStatus === 'inprogress').length;

    const doneCount = tasks.filter((t) => t.taskStatus === 'done').length;

  return (
    <div className="flex gap-5 mt-8 mx-4 justify-around">
      {tasks.map((t) => {
        return (
          <div key={t._id}>
            {t.taskStatus === "todo" ? (
              <div>
                <TodoButton />
                <p>{todoCount} tasks</p>
              </div>
            ) : t.taskStatus === "inprogress" ? (
              <div>
                <InProgressButton />
                <p>{inprogressCount} tasks</p>
              </div>
            ) : (
              <div>
                <DoneButton task={t} />
                <p>{doneCount} tasks</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FrontPageProgressButtons;
