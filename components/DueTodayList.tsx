import type { Task } from "../types/Task";
import TaskCard from "../components/TaskCard";

const DueTodayList = ({ tasks }: { tasks: Task[] }) => {

    const colors = [
    "slate-400",
    "gray-400",
    "zinc-400",
    "neutral-400",
    "stone-400",
    "red-400",
    "orange-400",
    "amber-400",
    "yellow-400",
    "lime-400",
    "green-400",
    "emerald-400",
    "teal-400",
    "cyan-400",
    "sky-400",
    "blue-400",
    "indigo-400",
    "violet-400",
    "purple-400",
    "fuchsia-400",
    "pink-400",
    "rose-400",
  ];

  return (
    <div className="flex gap-4 overflow-auto">
      {tasks ? (
        tasks.map((t, i) => {
          return (
            <div  key={t._id}>
              <TaskCard task={t} />
            </div>
          );
        })
      ) : (
        <p>No tasks due today</p>
      )}
    </div>
  );
};

export default DueTodayList;
