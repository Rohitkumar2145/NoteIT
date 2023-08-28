import { useState, useContext } from "react";
import React from "react";
import AddTaskButton from "./TaskModal/AddTaskButton";
import TaskForm from "./TaskModal/TaskForm";
import form from "./formContext";

const AddTask = () => {
  const formUpdate = useContext(form);
  console.log(formUpdate);
  const [displayModule, setDisplayModule] = useState(false);
  const toggleDisplay = () => {
    setDisplayModule(!displayModule);
  };
  return (
    <React.Fragment>
      <form.Provider value={{ isUpdate: false, toggle: toggleDisplay }}>
        {!displayModule && (
          <AddTaskButton toggleDisplay={toggleDisplay} type="Add" />
        )}
        {displayModule && <TaskForm toggleDisplay={toggleDisplay} />}
      </form.Provider>
    </React.Fragment>
  );
};
export default AddTask;
