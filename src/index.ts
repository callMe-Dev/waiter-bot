import { Client } from "discord.js"
import { config } from "./config/config"

// Functions
import { food } from "./functions/foods/[someFood]"
import { ping } from "./functions/ping"
import { help } from "./functions/help"
import { foods } from "./utils/foods"
import { colors } from "./utils/colors"

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

    food(client, ["pan"], foods[0].index)
    food(client, ["coca"], foods[1].index, colors.salmon)
    food(client, ["beef"], foods[2].index, colors.lightBrown)
  }
})

client.on("message", (message) => {
  // Validate to the messages isn't from the bot
  if (message.author === client.user) return
  if (message.author.bot) return
})

client.login(`${config.token}`)
