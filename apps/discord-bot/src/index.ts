/**
 * Gedeon Discord Bot — Entry point.
 *
 * Phase 1: minimal scaffold. Logs in, registers commands,
 * and listens to the ready event.
 */

import { Client, GatewayIntentBits, Collection } from "discord.js"
import { env } from "./config.js"
import { registerEvents } from "./events/index.js"
import { registerCommands } from "./commands/index.js"

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
})

// Command collection — populated during registration
client.commands = new Collection()

registerEvents(client)
registerCommands(client)

// ── Login ──
client.login(env.DISCORD_TOKEN).then(() => {
  console.log("[gedeon-bot] logging in...")
})
