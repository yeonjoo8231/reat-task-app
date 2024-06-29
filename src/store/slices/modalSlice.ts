import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../types";

type TModalState = {
  boardId: string;
  listid: string;
  task: ITask;
};

const initialState: TModalState = {
  boardId: "board-0",
  listId: "list-0",
  task: {
    taskId: "task-0",
    taskName: "task 0",
    taskDescription: "task description",
    taskOwner: "park",
  },
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // action을 생성하는 함수들을 만들어주면 된다.
  },
});

export const modalReducer = modalSlice.reducer;
