import { useEffect, useState } from "react";
import type { Task } from "../types/Task";

const greetings: string[] = [
  "Hello!",
  "Hi there!",
  "Welcome!",
  "Hey!",
  "Good morning!",
  "Good afternoon!",
  "Good evening!",
  "Nice to see you!",
  "Welcome back!",
  "Hey, friend!",
  "How are you today?",
  "Ready to get started?",
];

const Greeting = ({ tasks }: { tasks: Task[] }) => {
  const [randomGreeting] = useState(() => {
    const index = Math.floor(Math.random() * greetings.length);
    return greetings[index];
  });

  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs text-gray-500">{randomGreeting}</p>
      {tasks && (
        <div className="flex gap-2 text-lg font-bold">
          <p className="">You have</p>
          <p className="text-indigo-500">{tasks.length} tasks</p>{" "}
          <p>this month!</p>
        </div>
      )}
    </div>
  );
};

export default Greeting;
