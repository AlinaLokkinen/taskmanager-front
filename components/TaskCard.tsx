import type { Task } from "../types/Task";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div
      className={`w-40 rounded-xl p-3 flex flex-col text-white h-35 `}
    >
      <p className="text-sm font-semibold">{task.taskName}</p>
      <p className="truncate text-xs text-gray-300 my-2 h-2/3">
        {task.taskDescription}
      </p>
      <p className="text-xs mb-3">
        {new Date(task.taskDeadline).getHours()}:00
      </p>
      <p className="text-xs font-semibold ">Mark as done</p>
    </div>
  );
};

export default TaskCard;
