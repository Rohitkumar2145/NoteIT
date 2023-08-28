import React, { useContext } from "react";
import form from "../formContext";
const AddTaskButton = (props) => {
  const formContext = useContext(form);
  if (props.type === "Edit") {
    formContext.isUpdate = true;
    formContext.toggle();
  }
  const display = () => {
    props.toggleDisplay();
  };
  return (
    <React.Fragment>
      <div style={{ margin: "auto", width: "100px" }}>
        <button
          type="button"
          style={{ width: "100px" }}
          class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={display}
        >
          Add Task
        </button>
      </div>
    </React.Fragment>
  );
};
export default AddTaskButton;
