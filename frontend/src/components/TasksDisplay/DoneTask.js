import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable/dist/sortable.cjs.production.min";
import Task from "../Task/Task";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable/dist/sortable.cjs.production.min";
const DoneTask = (props) => {
  return (
    <div
      class="border-solid border-4 border-yellow-600 overflow-auto"
      style={{ height: "400px" }}
    >
      <div
        style={{ textAlign: "center", color: "white" }}
        class="sticky top-0 text-2xl border-solid border-b-4 border-green-600 m-2 bg-[#030124]"
      >
        Task Done
      </div>
      <div>
        <SortableContext
          items={props.done.map((d) => d._id)}
          strategy={verticalListSortingStrategy}
        >
          {props.done.map((task) => (
            <Task
              key={task._id}
              id={task._id}
              title={task.title}
              desc={task.description}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};
export default DoneTask;
