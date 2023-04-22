import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function AddNote(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <form id="addNotes">
      {isExpanded && (
        <input
          name="title"
          onChange={handelChange}
          value={note.title}
          className="addInput addTitleInput"
          type="text"
          placeholder="Title"
        />
      )}
      <textarea
        name="content"
        onClick={expand}
        onChange={handelChange}
        value={note.content}
        className="addInput addContentInput"
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
      />
      <Zoom in={isExpanded ? true : false}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default AddNote;
