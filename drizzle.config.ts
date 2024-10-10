import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "turso",
	schema: "./src/db/schema/*",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
		authToken: process.env.DATABASE_AUTH_TOKEN,
	},
	verbose: true,
	strict: true,
	casing: "snake_case",
});
