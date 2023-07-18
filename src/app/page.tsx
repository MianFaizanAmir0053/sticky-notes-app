import { prisma } from "@/db";
import Todo from "./Todo";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {todos?.map((todo: any) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </main>
  );
}
