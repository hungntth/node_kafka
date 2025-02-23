import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "./src/config";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema/*",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL || "postgresql://order_db:order_db_password@localhost:5433/order_service?schema=public",
  },
});
