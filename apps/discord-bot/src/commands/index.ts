import type { Client } from "discord.js"
import { ping } from "./ping.js"

/**
 * Register all slash commands with the Discord client.
 */
export function registerCommands(client: Client): void {
  ping(client)
  console.log("[gedeon-bot] commands registered")
}
