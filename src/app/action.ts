"use server";

import { prisma } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteHandler(data: string) {
  if (data === undefined) return;
  await prisma.todo.delete({
    where: {
      id: data,
    },
  });

  revalidatePath("/");
}

export async function updateHandler(data: string, value: boolean) {
  if (data === undefined || value === undefined) return;
  await prisma.todo.update({
    where: {
      id: data,
    },
    data: {
      complete: value !== true ? true : false,
    },
  });

  revalidatePath("/");
}


export async function addHandler(data: FormData) {
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

export async function editHandler(data: string, value: string) {
  if (data === undefined || value === undefined) return;
  await prisma.todo.update({
    where: {
      id: data,
    },
    data: {
      title: value,
    },
  });

  revalidatePath("/");
}

export async function clearHandler() {
  await prisma.todo.deleteMany();

  revalidatePath("/");
}
