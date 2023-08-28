import { useRef } from "react";
const TaskForm = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const addTask = async () => {
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };
    const temp = await fetch("https://noteit-api2.onrender.com/api/v1/tasks", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    titleRef.current.value = "";
    descriptionRef.current.value = "";

    props.toggleDisplay();
    window.location.reload();
  };
  return (
    <div>
      <div class="w-full max-w-lg" style={{ margin: "auto" }}>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Task Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              ref={titleRef}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Task Description
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              cols={20}
              rows={5}
              ref={descriptionRef}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="button"
              style={{ margin: "auto" }}
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TaskForm;
