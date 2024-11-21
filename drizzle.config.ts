import { defineConfig } from "drizzle-kit";


export default defineConfig({
    dialect: "mysql",
    schema: "./src/database/schema/*",
    out: "./drizzle",
    dbCredentials: {
        host: "localhost",
        user: "root",
        database: "simpele-webserver"
    }
})