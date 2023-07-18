import { prisma } from "@/db";
import Todo from "../Todo";

async function CompletedTodos() {
  const completedTodos = await prisma.todo.findMany({
    where: {
      complete: true,
    },
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {completedTodos.map((todo: any, i) => (
        <Todo todo={todo} key={i} />
      ))}
    </div>
  );
}

export default CompletedTodos;
