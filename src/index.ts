import { Client } from "discord.js"
import { config } from "./config/config"

const client: Client = new Client({
  partials: ["MESSAGE", "REACTION"],
})

// Functions
import { ping } from "./functions/ping"

client.on("message", (message) => {
  // Validate to the messages isn't from the bot
  if (message.author === client.user) return
  if (message.author.bot) return
})

ping(client, "ping")

client.login(`${config.token}`)
