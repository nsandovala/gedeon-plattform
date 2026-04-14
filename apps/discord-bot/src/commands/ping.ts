import type { Client } from "discord.js"
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"

/**
 * /ping — basic health check command.
 * Phase 1: responds with "Pong!".
 */
export function ping(client: Client): void {
  const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check if the bot is alive")

  const execute = async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply("Pong! 🟢")
  }

  client.commands.set(data.name, { data, execute })
}
