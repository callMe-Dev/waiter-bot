import { Client } from "discord.js"
import { config } from "./config/config"

// Functions
import { ping } from "./functions/ping"
import { help } from "./functions/help"
// import { pan } from "./functions/foods/pan"
import { food } from "./functions/foods/[someFood]"

const client: Client = new Client({
  partials: ["MESSAGE", "REACTION"],
})

client.on("ready", () => {
  if (client === null) return
  else {
    console.log(`Bot is ready as ${client?.user?.username}`)
    client?.user?.setStatus("online")
    // handles the maximum available event or command listener
    client.setMaxListeners(20)

    // Commands
    ping(client)
    help(client)
    food(client)
  }
})

client.on("message", (message) => {
  // Validate to the messages isn't from the bot
  if (message.author === client.user) return
  if (message.author.bot) return
})

client.login(`${config.token}`)
