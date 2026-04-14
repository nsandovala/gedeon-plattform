import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DISCORD_TOKEN: z.string().min(1, "DISCORD_TOKEN es obligatorio"),
  DISCORD_GUILD_ID: z.string().min(1, "DISCORD_GUILD_ID es obligatorio"),
  API_URL: z.string().url("API_URL debe ser una URL válida"),
});

export const env = envSchema.parse({
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  DISCORD_GUILD_ID: process.env.DISCORD_GUILD_ID,
  API_URL: process.env.API_URL,
});