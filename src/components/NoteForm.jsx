import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { createNote } from "../features/notes/noteSlice";

const NoteForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text.length > 0) {
      return toast.error("Please add a few words!");
    }

    dispatch(createNote({ text }));

    setText("");
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="write something..."
        />
        <button type="submit" className="btn-list">
          Add to the list
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
