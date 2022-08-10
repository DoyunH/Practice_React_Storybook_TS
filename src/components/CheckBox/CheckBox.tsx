import React from "react";

export interface CheckBoxProps {
  task: {
    id?: string;
    title?: string;
    state?: any;
  };
  onArchiveTask?: boolean;
  onPinTask?: boolean;
}

export default function CheckBox({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: CheckBoxProps) {
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
      </label>
    </div>
  );
}
