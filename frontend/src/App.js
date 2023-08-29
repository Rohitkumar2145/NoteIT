import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTask from "./components/DisplayTask";
import { useState } from "react";
import UpdateTaskForm from "./components/UpdateTaskForm";
function App() {
  const [display, setDisplay] = useState(false);
  const [idObject, setid] = useState();
  const toggleDisplay = (id) => {
    setDisplay(!display);
    setid(id);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <h1
        // style={{ marginLeft: "40%", width: "100%" }}
        class="text-center mb-2 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black"
      >
        NoteIT App
      </h1>
      <AddTask />
      {!display && <DisplayTask toggle={toggleDisplay} />}
      {display && <UpdateTaskForm id={idObject} />}
    </div>
  );
}

export default App;
