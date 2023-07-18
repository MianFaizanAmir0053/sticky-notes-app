"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import { deleteHandler, updateHandler } from "./action";
import { useTransition } from "react";

function Todo({ todo }: { todo: any }) {
  let [isPending, startTransition] = useTransition();
  return (
    <div
      className={`p-4 relative flex flex-col justify-between rounded col-span-1 h-full shadow-lg hover:bg-slate-200 bg-slate-100`}
    >
      <div className="pb-4">
        <h1 className=" text-blue-500">{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
      <button onClick={() => startTransition(() => deleteHandler(todo.id))}>
        <DeleteIcon className=" hover:text-red-700 absolute top-4 right-2 text-red-500 cursor-pointer" />
      </button>
      <button
        onClick={() =>
          startTransition(() => updateHandler(todo.id, todo.complete))
        }
        className={`${
          !todo.complete
            ? "bg-amber-500 hover:bg-amber-600 text-amber-100"
            : " bg-green-500 hover:bg-green-600 text-green-100"
        } rounded py-2 px-4 w-fit`}
      >
        {todo.complete ? "complete" : "not completed"}
      </button>
    </div>
  );
}

export default Todo;
