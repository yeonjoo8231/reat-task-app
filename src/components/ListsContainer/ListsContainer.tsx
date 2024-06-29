import React, { FC } from "react";
import { IList } from "../../types";
import List from "../List/List";
import ActionButton from "../ActionButton/ActionButton";
import { listContainer } from "./ListsContainer.css";

type TListContainerProps = {
  lists: IList[];
  boardId: string;
};

const ListsContainer: FC<TListContainerProps> = ({ lists, boardId }) => {
  return (
    <div className={listContainer}>
      {lists.map((list) => (
        <List key={list.listId} list={list} boardId={boardId}></List>
      ))}
      <ActionButton boardId={boardId} listId={""} list />
    </div>
  );
};

export default ListsContainer;
