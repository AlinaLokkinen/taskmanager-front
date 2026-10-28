import type Task from "../types/Task";
import TodoButton from "./buttons/TodoButton";
import InProgressButton from "./buttons/InProgressButton";
import DoneButton from "./buttons/DoneButton";

const FrontPageProgressButtons = ({ tasks }: { tasks: Task[] }) => {
  const statusList = ["todo", "inProgress", "done"];

  const todoCount = tasks.filter((t) => t.taskStatus === "todo").length;

  const inprogressCount = tasks.filter(
    (t) => t.taskStatus === "inprogress",
  ).length;

  const doneCount = tasks.filter((t) => t.taskStatus === "done").length;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-5 mt-8 mx-4 justify-around">
        {statusList.map((s, i) => {
          return (
            <div key={i}>
              {s === "todo" ? (
                <TodoButton />
              ) : s === "inProgress" ? (
                <InProgressButton />
              ) : (
                <DoneButton task={tasks} />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-around text-sm">
        <p>{todoCount} tasks</p>
        <p>{inprogressCount} tasks</p>
        <p>{doneCount} tasks</p>
      </div>
    </div>
  );
};
export default FrontPageProgressButtons;
