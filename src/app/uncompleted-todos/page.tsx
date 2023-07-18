import { prisma } from "@/db";
import Todo from "../Todo";

async function UnCompletedTodos() {
  const unCompletedTodos = await prisma.todo.findMany({
    where: {
      complete: false,
    },
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {unCompletedTodos.map((todo: any, i) => (
        <Todo todo={todo} key={i} />
      ))}
    </div>
  );
}

export default UnCompletedTodos;
