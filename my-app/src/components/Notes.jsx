import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Notes(props) {
  function handelClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="notes">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="notesBtnContainer">
        <button className="notesBtn">Edit</button>
        <button className="notesBtn">Check</button>
        <button onClick={handelClick} className="notesBtn">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Notes;
