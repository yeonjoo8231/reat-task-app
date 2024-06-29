import React, { ChangeEvent, FC, useState, useRef } from "react";
import { FiCheck } from "react-icons/fi";
import { input, sideForm, icon } from "./SideForm.css";
import { useTypedDispatch } from "../../../hooks/redux";
import { v4 as uuidv4 } from "uuid";
import { addBoard } from "../../../store/slices/boardsSlice";
import { addLog } from "../../../store/slices/loggerSlice";

type TSideFromProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
};

const SideForm: FC<TSideFromProps> = ({ setIsFormOpen, inputRef }) => {
  const [inputText, setInpuText] = useState("");
  const dispatch = useTypedDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInpuText(e.target.value);
  };
  const handleOnblur = () => {
    setIsFormOpen(false);
  };
  const handleClick = () => {
    if (inputText) {
      dispatch(
        addBoard({
          board: {
            boardId: uuidv4(),
            boardName: inputText,
            lists: [],
          },
        })
      );
      dispatch(
        addLog({
          logId: uuidv4(),
          logMessage: `게시판 등록: ${inputText}`,
          logAuthor: "User",
          logTimeStamp: String(Date.now()),
        })
      );
    }
  };
  return (
    <div className={sideForm}>
      <input
        // ref={inputRef}
        autoFocus
        className={input}
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnblur}
      />
      <FiCheck className={icon} onMouseDown={handleClick} />
    </div>
  );
};

export default SideForm;
