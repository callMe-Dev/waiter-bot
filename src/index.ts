import { Client } from "discord.js"
import { config } from "./config/config"

const client: Client = new Client({
  partials: ["MESSAGE", "REACTION"],
})

client.on("message", (message) => {
  // Validate to the messages isn't from the bot
  if (message.author === client.user) return
  if (message.author.bot) return
})

client.login(`${config.token}`)
