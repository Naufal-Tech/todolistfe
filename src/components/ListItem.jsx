import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteNote, updateNote } from "../features/notes/noteSlice";

import { RiDeleteBinLine } from "react-icons/ri";

const ListItem = ({ note }) => {
  const [itemStatus, setItemStatus] = useState(note.textStatus);

  const { isError, message } = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.error(message);
    }
  }, [note, dispatch, message]);

  // Change checkbox status with double click
  const changeStatus = () => {
    const updatedNote = {
      ...note,
      textStatus: !itemStatus,
    };
    dispatch(updateNote(updatedNote));
    setItemStatus(!itemStatus);
  };

  return (
    <ul>
      <li onDoubleClick={changeStatus}>
        <input
          type="checkbox"
          name="item"
          checked={itemStatus}
          onChange={changeStatus}
        />
        <div className="title">{note.text}</div>
        <i onClick={() => dispatch(deleteNote(note._id))}>
          <RiDeleteBinLine />
        </i>
      </li>
    </ul>
  );
};

export default ListItem;
