import { useEffect, useRef, useState } from "react";
const UpdateTaskForm = (props) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [status, setStatus] = useState();
  const [validate, setValidate] = useState(false);
  const titleVal = useRef(title);
  const descVal = useRef(desc);
  const statusVal = useRef(status);
  console.log(props.id);
  const onTitle = () => {
    setTitle(titleVal.current.val);
  };
  const onDesc = () => {
    setDesc(descVal.current.val);
  };
  const onStatus = () => {
    setStatus(statusVal.current.val);
  };
  useEffect(() => {
    const getData = async () => {
      const temp = await fetch(
        `https://noteit-api2.onrender.com/api/v1/tasks/${props.id}`
      );
      const dataObject = await temp.json();
      console.log(dataObject.data[0].title);
      setTitle(dataObject.data[0].title);
      setDesc(dataObject.data[0].description);
      setStatus(dataObject.data[0].status);
    };
    getData();
  }, []);

  const onUpdate = () => {
    const data = {
      title: titleVal.current.value,
      description: descVal.current.value,
      status: statusVal.current.value.toLowerCase(),
    };

    if (
      data.status === "todo" ||
      data.status === "done" ||
      data.status === "doing"
    ) {
      console.log(data);
      fetch(`https://noteit-api2.onrender.com/api/v1/tasks/${props.id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      setValidate(true);
    }
  };
  const onDelete = () => {
    fetch(`https://noteit-api2.onrender.com/api/v1/tasks/${props.id}`, {
      method: "DELETE",
    });
    setTimeout(() => {
      window.location.reload();
    }, 1500);
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
              value={title}
              ref={titleVal}
              onChange={onTitle}
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
              value={desc}
              ref={descVal}
              onChange={onDesc}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username2"
            >
              Task Status
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username2"
              type="text"
              value={status}
              ref={statusVal}
              onChange={onStatus}
            />
          </div>
          {validate && (
            <p class="text-[#FF0000] mb-2">Enter status: ToDo | Done | Doing</p>
          )}
          <div class="flex items-center justify-between">
            <button
              class="text-white bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="button"
              style={{ margin: "auto" }}
              onClick={onUpdate}
            >
              Update Task
            </button>
            <button
              class="text-white bg-gradient-to-r from-red-500 via-red-500 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="button"
              style={{ margin: "auto" }}
              onClick={onDelete}
            >
              Delete Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateTaskForm;
