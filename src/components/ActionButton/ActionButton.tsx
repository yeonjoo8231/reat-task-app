import React, { FC, useState } from "react";
import DropDownForm from "./DropDownForm/DropDownForm";
import { IoIosAdd } from "react-icons/io";
import { listButton, taskButton } from "./AcctionButton.css";

type TActionButtionProps = {
  boardId: string;
  listId: string;
  list?: boolean;
};
const ActionButton: FC<TActionButtionProps> = ({ boardId, listId, list }) => {
  const [isFormOpen, setIsFrormOpen] = useState(false);
  const buttonText = list ? "새로운 리스트 등록" : "새로운 일 등록";
  return isFormOpen ? (
    <DropDownForm
      setIsFormOpen={setIsFrormOpen}
      list={list}
      boardId={boardId}
      listId={listId}
    ></DropDownForm>
  ) : (
    <div
      className={list ? listButton : taskButton}
      onClick={() => setIsFrormOpen(true)}
    >
      <IoIosAdd></IoIosAdd>
      <p>{buttonText}</p>
    </div>
  );
};

export default ActionButton;
