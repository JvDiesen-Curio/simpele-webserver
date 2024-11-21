import { varchar } from "drizzle-orm/mysql-core";
import { int } from "drizzle-orm/mysql-core";
import { mysqlTable } from "drizzle-orm/mysql-core";


export const db_users = mysqlTable('users', {
    id: int('id').primaryKey().autoincrement(),
    name: varchar('name', { length: 255 }).notNull(),
    user_name: varchar('user_name', { length: 255 }).notNull().unique(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
});