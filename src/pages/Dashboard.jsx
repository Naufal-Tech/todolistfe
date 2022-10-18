import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getNotes, reset } from "../features/notes/noteSlice";

import NoteForm from "../components/NoteForm";
import ListItem from "../components/ListItem";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { notes, isError, message } = useSelector(
    (state) => state.notes
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.error(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getNotes());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, navigate, dispatch, message]);

  return (
    <div className="dashboard">
      <h1>{user && user.name}'s List</h1>
      <NoteForm />
      {notes.length > 0 ? (
        <div className="list">
          {notes.map((note) => {
            return <ListItem key={note._id} note={note} />;
          })}
        </div>
      ) : (
        <div className="no-note">
          <h2>No notes added yet!</h2>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
