import { Client, Message } from "discord.js"
import { command } from "../command/command"

export const ping = (client: Client, aliases: any) => {
  command(client, aliases, (message: Message) => {
    message.reply("pong")
  })
}
