import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable/dist/sortable.cjs.production.min";
import Task from "../Task/Task";

const DoingTask = (props) => {
  return (
    <div
      class="border-solid border-4 border-yellow-600 overflow-auto"
      style={{ height: "400px" }}
    >
      <div
        style={{ textAlign: "center" }}
        class=" sticky top-0 text-white text-2xl border-solid border-b-4 border-blue-600 m-2 bg-[#030124]"
      >
        Doing Task
      </div>
      <div>
        <SortableContext
          items={props.doing.map((d) => d._id)}
          strategy={verticalListSortingStrategy}
        >
          {props.doing.map((task) => (
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
export default DoingTask;
