import { prisma } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function addTodo(data: FormData) {
  "use server";

  const { title, description } = {
    title: data.get("title")?.valueOf(),
    description: data.get("description")?.valueOf(),
  };

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title or description");
  }

  if (typeof description !== "string" || description.length === 0) {
    throw new Error("Invalid title or description");
  }

  await prisma.todo.create({
    data: {
      title,
      description: description,
      complete: false,
    },
  });
  revalidatePath("/");
  redirect("/");
}

function AddTodo() {
  return (
    <div>
      <form
        action={addTodo}
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
