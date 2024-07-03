import { todo } from "./db/schema";

export type todoType = typeof todo.$inferSelect;
