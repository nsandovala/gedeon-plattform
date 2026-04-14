import type { Client } from "discord.js"
import { ready } from "./ready.js"

/**
 * Register all event handlers with the Discord client.
 */
export function registerEvents(client: Client): void {
  client.once("clientReady", () => {
    console.log(`[gedeon-bot] logged in as ${client.user?.tag}`)
  })
}
