import React, { useEffect, useState } from "react";
import Note from "./Noteold";
import CreateArea from "./CreateAreaOLD";
import './todolist.css'; // Importing CSS styles

function Todolist() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="todolist-wrapper">
      <div className="todolist-container">
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todolist;
