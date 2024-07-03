import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from "@/db/schema";

const sql = neon("postgresql://drizzle-todos_owner:VWoLJl2xUOs7@ep-sweet-snow-a5zfhkq8.us-east-2.aws.neon.tech/drizzle-todos?sslmode=require");
const db = drizzle(sql, { schema });
export default db;