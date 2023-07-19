"use client";

import toast, { Toaster } from "react-hot-toast";
import { addHandler } from "../action";

function AddTodo() {
  toast.remove();
  return (
    <div>
      <Toaster />
      <form
        action={addHandler}
        className="flex flex-col w-fit border-2 p-4 borde-slate-500"
      >
        <input
          className=" outline-none border-b-2"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
        <textarea
          className=" min-h-[12rem] outline-none border-l-2 border-r-2 border-b-2"
          name="description"
          id="description"
          placeholder="Description"
        />
        <button
          onClick={() => toast.loading("Adding todo...")}
          className="px-4 py-2 mt-4  bg-slate-400 rounded text-white"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
