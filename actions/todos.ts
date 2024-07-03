"use server";

import { asc, eq, not } from "drizzle-orm";

import db from "@/db/drizzle";
import { todo } from "@/db/schema";

export const addTodo = async (id: number, text: string) => {
  const data = await db.insert(todo).values({
    id: id,
    text: text,
  });

  return data;
};

export const getData = async () => {
  const data = await db.select().from(todo).orderBy(asc(todo.id));
  return data;
};

export const editTodo = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));
};

export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));
};
