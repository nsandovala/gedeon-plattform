import type { Client } from "discord.js"

/**
 * Fired when the bot connects successfully.
 * Phase 1: logs the bot's tag.
 */
export function ready(client: Client): void {
  console.log(`[gedeon-bot] logged in as ${client.user?.tag}`)
}
