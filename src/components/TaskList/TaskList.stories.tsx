import React from "react";

import TaskList, { TaskListProps } from "./TaskList";
import * as TaskStories from "../Task/Task.stories";
import { Meta, Story } from "@storybook/react";

import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

type MockStorePropsType = {
  taskboxState: TaskListProps;
  children: React.ReactNode;
};

export const MockedState = {
  tasks: [
    { ...TaskStories.Default.args?.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args?.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args?.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args?.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args?.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args?.task, id: "6", title: "Task 6" },
  ],
  status: "idle",
  error: null,
};

const Mockstore = ({ taskboxState, children }: MockStorePropsType) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: "taskbox",
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state: any, action) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks?.findIndex(
                (task: { id: any }) => task.id === id
              );
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [
    (story: any) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
  excludeStories: /.*MockedState$/,
} as Meta;

const Template: Story<TaskListProps> = (args: any) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
];

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.decorators = [
  (story) => {
    const pinnedtask = [
      ...MockedState.tasks.slice(0, 5),
      { id: "6", title: "Task 6(pinned)", state: "TASK_PINNED" },
    ];
    return (
      <Mockstore taskboxState={{ ...MockedState, tasks: pinnedtask }}>
        {story()}
      </Mockstore>
    );
  },
];

export const Loading = Template.bind({});
Loading.decorators = [
  (story) => (
    <Mockstore
      taskboxState={{
        ...MockedState,
        status: "Loading",
      }}
    >
      {story()}
    </Mockstore>
  ),
];

export const Empty = Template.bind({});
Empty.decorators = [
  (story) => (
    <Mockstore
      taskboxState={{
        ...MockedState,
        tasks: [],
      }}
    >
      {story()}
    </Mockstore>
  ),
];
