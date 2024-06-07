import React from "react";
import DeleteIcon from "./images/deletemarbleicon.png";

  function Note(props) {
    function handleClick() {
      props.onDelete(props.id);
    }

    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><img className="button-image" src={DeleteIcon} alt = "DeleteTest" /></button>
      </div>
    );
  }

export default Note;
