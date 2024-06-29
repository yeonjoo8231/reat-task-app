import React, { FC } from "react";
import { container, title } from "./Task.css";
type TTaskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
};
const Task: FC<TTaskProps> = ({
  index,
  id,
  boardId,
  taskName,
  taskDescription,
}) => {
  return (
    <div>
      <div className={container}>{taskName}</div>
      <div className={title}>{taskDescription}</div>
    </div>
  );
};

export default Task;
