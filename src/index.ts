import { Client } from "discord.js"
import { config } from "./config/config"
import { pan } from "./functions/foods/pan"
import { help } from "./functions/help"
// Functions
import { ping } from "./functions/ping"
import { search } from "./functions/search"
import FoodSearch from "./modules/FoodSearch"


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
    pan(client)
    search(client);
  }
})

client.on("message", (message) => {
  // Validate to the messages isn't from the bot
  if (message.author === client.user) return
  if (message.author.bot) return
})

client.login(`${config.token}`)

const f = new FoodSearch('pan');
f.set();