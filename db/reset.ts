import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import { todo } from './schema';

const sql = neon(process.env.NEON_DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    console.log("Resetting database");

    await db.delete(todo);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to reset database");
  };
};

main();
