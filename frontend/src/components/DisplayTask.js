import { useState, useEffect, useContext } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable/dist/sortable.cjs.production.min";
import React from "react";

import DoingTask from "./TasksDisplay/DoingTask";
import DoneTask from "./TasksDisplay/DoneTask";
import ToDoTask from "./TasksDisplay/ToDoTask";
import form from "./formContext";

const DisplayTask = (props) => {
  let data = [];
  const [tempdata, setdata] = useState(data);
  useEffect(() => {
    const fetchData = async () => {
      const tempData = await fetch("http://127.0.0.1:5000/api/v1/tasks");
      const JsonData = await tempData.json();
      data = JsonData.data;
      setdata(data);
    };
    fetchData();
  }, []);
  const todo = tempdata.filter((task) => task.status === "todo");
  const done = tempdata.filter((task) => task.status === "done");
  const doing = tempdata.filter((task) => task.status === "doing");
  const formContext = useContext(form);
  const onDragEnd = (event) => {
    const { active, over, delta } = event;
    formContext.toggle();
    let check1 = tempdata.find((el) => el._id === over.id);
    let check2 = tempdata.find((el) => el._id === active.id);
    if (check2.title === "No Task for this stage") {
      return;
    }
    console.log(event);

    if (delta.x === 0 && delta.y === 0) {
      console.log("inToggle");
      props.toggle(active.id);
      return;
    }
    if (active.id === over.id) {
      // console.log("return");
      return;
    }
    // if (data[active.id - 1].title === "No task for this stage") {
    //   console.log(data[active.id - 1], tempdata);
    //   return;
    // }

    setdata((tempdata) => {
      let old = tempdata.find((el) => el._id === active.id);
      const newIn = tempdata.find((el) => el._id === over.id);
      if (old.status !== newIn.status) {
        old.status = newIn.status;
      }
      // console.log(tempdata);
      const tempArray = [];
      for (let i = 0; i < tempdata.length; i++) {
        if (tempdata[i]._id !== active.id && tempdata[i]._id !== over.id) {
          tempArray.push(tempdata[i]);
        } else if (tempdata[i]._id === over.id) {
          tempArray.push(old);
          tempArray.push(newIn);
        }
      }
      async function position() {
        await fetch("http://127.0.0.1:5000/api/v1/tasks", {
          method: "DELETE",
        });
        // console.log("del");
        await fetch("http://127.0.0.1:5000/api/v1/tasks/many", {
          method: "POST",
          body: JSON.stringify(tempArray),
          headers: {
            "Content-Type": "application/json",
          },
        });
        // console.log("in");
      }
      position();
      // temp.push({ title: "8" });
      // console.log(tempArray);

      return tempArray;
    });
    // console.log(tempdata);
  };
  if (todo.length === 0) {
    async function todoAdd() {
      await fetch("http://127.0.0.1:5000/api/v1/tasks", {
        method: "POST",
        body: JSON.stringify({
          title: "No task for this stage",
          status: "todo",
        }),
      });
    }
    todoAdd();
  }
  if (done.length === 0) {
    async function todoAdd() {
      await fetch("http://127.0.0.1:5000/api/v1/tasks", {
        method: "POST",
        body: JSON.stringify({
          title: "No task for this stage",
          status: "done",
        }),
      });
    }
    // console.log("done");
    todoAdd();
  }
  if (doing.length === 0) {
    async function todoAdd() {
      await fetch("http://127.0.0.1:5000/api/v1/tasks", {
        method: "POST",
        body: JSON.stringify({
          title: "No task for this stage",
          status: "doing",
        }),
      });
    }
    console.log("doing");
    todoAdd();
  }
  // console.log(todo);
  return (
    <React.Fragment>
      <div
        class="grid md:grid-cols-3 gap-4 content-center"
        style={{
          margin: "auto",
          marginTop: "50px",
          width: "80%",
        }}
      >
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <div>
            <ToDoTask todo={todo} data={tempdata} />
          </div>
          <div>
            <DoingTask doing={doing} />
          </div>

          <div>
            <DoneTask done={done} />
          </div>
        </DndContext>
      </div>
    </React.Fragment>
  );
};

export default DisplayTask;
