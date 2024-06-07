import React, { useState } from "react";
import AddIcon from "./images/addmarbleicon.png";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      submitNote(event);
    }
  }

  return (
    <div>
      <form className="create-note" onKeyPress={handleKeyPress}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}><img className="button-add" src={AddIcon} alt="Add" /></button>
      </form>
    </div>
  );
}

export default CreateArea;
