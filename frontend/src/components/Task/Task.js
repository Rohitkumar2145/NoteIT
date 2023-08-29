import { useSortable } from "@dnd-kit/sortable";

const Task = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: props.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  return (
    <div
      class="m-2"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div
        style={style}
        class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a>
          <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p class=" font-normal mb-2 text-sm text-gray-700 dark:text-gray-400">
          {props.desc}
        </p>

        {!(props.desc === "Ignore if tasks are added") && (
          <button
            href="#"
            class="inline-flex items-center px-4 py-1 mx-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
          </button>
        )}
        {!(props.desc === "Ignore if tasks are added") && (
          <button
            href="#"
            class="inline-flex items-center px-4 py-1 mx-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
export default Task;
