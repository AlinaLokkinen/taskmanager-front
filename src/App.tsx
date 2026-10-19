import Greeting from "../components/Greeting";
import AllProgressButtons from "../components/FrontPageProgressButtons";
import { useEffect, useState } from "react";
import TodaysTasks from "../components/TodaysTasks";
import { Link } from "react-router";
import { Routes, Route } from "react-router";
import type { Task } from "../types/Task";
import DueTodayList from "../components/DueTodayList";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const today = new Date();

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    async function getTasks() {
      await fetch(`${url}/api/tasks`)
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch((error) => console.log(error));
    }
    getTasks();
  }, []);

  const dueToday = tasks.filter(
    (task) =>
      new Date(task.taskDeadline).getDate() === today.getDate() &&
      new Date(task.taskDeadline).getMonth() === today.getMonth() &&
      new Date(task.taskDeadline).getFullYear() === today.getFullYear(),
  );

  const dueThisMonth = tasks.filter(
    (task) =>
      new Date(task.taskDeadline).getMonth() === today.getMonth() &&
      new Date(task.taskDeadline).getFullYear() === today.getFullYear(),
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="mt-10 mx-5 font-montserrat">
            <Greeting tasks={dueThisMonth} />
            <p className="text-gray-500 my-5">A search bar goes here</p>
            {tasks && (
              <div>
                <AllProgressButtons tasks={tasks} />
                <div className="flex mt-10 justify-between items-center">
                  <p className="font-bold text-lg">Due today</p>
                  <Link to={"/todaystasks"}>
                    <p className="text-xs text-gray-500 mx-5">See all</p>
                  </Link>
                </div>
                <div className="flex justify-between mt-3">
                  <DueTodayList tasks={dueToday} />
                </div>
              </div>
            )}
          </div>
        }
      />

      <Route path="/todaystasks" element={<TodaysTasks tasks={tasks} />} />
    </Routes>
  );
};

export default App;
