import type { Client } from "discord.js"
import { ready } from "./ready.js"

/**
 * Register all event handlers with the Discord client.
 */
export function registerEvents(client: Client): void {
  client.on("ready", () => ready(client))
  console.log("[gedeon-bot] events registered")
}
