"use client";
import { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    console.log(content);
    setContent("");
    setTitle("");
  };
  return (
    <form
      onSubmit={submitHandler}
      action=""
      className="flex flex-col w-fit border-2 p-4 borde-slate-500"
    >
      <input
        className=" outline-none border-b-2"
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className=" min-h-[12rem] outline-none border-l-2 border-r-2 border-b-2"
        name="description"
        id="description"
        placeholder="Description"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="px-4 py-2 mt-4  bg-slate-400 rounded text-white"
        type="submit"
        value="submit"
      >
        submit
      </button>
    </form>
  );
}

export default Form;
