import type { Client } from "discord.js"

/**
 * Extend the Discord.js Client type with a commands collection.
 */
declare module "discord.js" {
  interface Client {
    commands: Collection<string, any>
  }
}

export {}
