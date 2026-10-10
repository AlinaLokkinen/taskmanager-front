import Greeting from "../../components/Greeting";
import AllProgressButtons from "../../components/FrontPageProgressButtons";
import { useEffect, useState } from "react";
import TodaysTasks from "../../components/TodaysTasks";
import { Link } from "react-router";
import { Routes, Route } from "react-router";

const App = () => {
  const [tasks, setTasks] = useState([]);

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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Greeting />
            <p>A search bar</p>
            <AllProgressButtons tasks={tasks} />

            <Link to={"/todaystasks"}>
              {" "}
              <p>Today's tasks</p>
            </Link>
          </div>
        }
      />

      <Route path="/todaystasks" element={<TodaysTasks tasks={tasks} />} />
    </Routes>
  );
};

export default App;
