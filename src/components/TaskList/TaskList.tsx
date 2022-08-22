import React from "react";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskState } from "../../lib/store";

export interface TaskListProps {
  error?: any;
  status: string;
  tasks: Array<{
    id: string;
    state?: any;
    title: string;
  }>;
}

export default function TaskList() {
  const tasks = useSelector((state: any) => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t: any) => t.state === "TASK_PINNED"),
      ...state.taskbox.tasks.filter((t: any) => t.state !== "TASK_PINNED"),
    ];
    const filteredTasks = tasksInOrder.filter(
      (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    );
    return filteredTasks;
  });

  const status = useSelector((state: any) => {
    return state.taskbox.status;
  });

  const dispatch = useDispatch();

  const pinTask = (value: any) => {
    // We're dispatching the Pinned event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_PINNED" }));
  };
  const archiveTask = (value: any) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_ARCHIVED" }));
  };
  const events = {
    pinTask,
    archiveTask,
  };
  const LoadingRow = (
    <div className="list-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (status === "Loading") {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <img
            alt="checked"
            src="https://img.icons8.com/color/96/000000/checked-checkbox.png"
          />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
