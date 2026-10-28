import type { Task } from "../types/Task";
import TaskCard from "../components/TaskCard";

const DueTodayList = ({ tasks }: { tasks: Task[] }) => {

  

  return (
    <div className="flex gap-4 overflow-auto">
      {tasks.length > 0 ? (
        tasks.map((t) => {
          return (
            <div  key={t._id}>
              <TaskCard task={t} />
            </div>
          );
        })
      ) : (
        <p>No tasks due today!</p>
      )}
    </div>
  );
};

export default DueTodayList;
