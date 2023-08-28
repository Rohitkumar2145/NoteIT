import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable/dist/sortable.cjs.production.min";
import Task from "../Task/Task";

const ToDoTask = (props) => {
  return (
    <div
      class="border-solid border-4 border-yellow-600 overflow-auto "
      style={{ height: "400px" }}
    >
      <div
        style={{ textAlign: "center" }}
        class="sticky top-0 text-2xl border-solid border-b-4 border-red-600 m-2 bg-[#030124] text-white"
      >
        To Do Task
      </div>
      <div>
        <SortableContext
          items={props.data.map((d) => d._id)}
          strategy={verticalListSortingStrategy}
        >
          {props.todo.map((task) => (
            <Task
              key={task._id}
              id={task._id}
              title={task.title}
              desc={task.description}
              data={props.data}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};
export default ToDoTask;
