import { Client, Message } from "discord.js"
import { config } from "../config/config"
const prefix = config.prefix

/**
 * @param client: Client
 * @param aliases: Array<String>
 * @param callback: Function
 */
export const command = (
  client: Client,
  aliases: any = "",
  callback: Function
): void => {
  if (typeof aliases === "string") {
    aliases.toLowerCase()
    aliases = [aliases]
  }

  client.on("message", (message: Message) => {
    const { content } = message

    const contentLower: string = content.toLowerCase()

    aliases.forEach((alias: String) => {
      const command: string = `${prefix}${alias}`

      const commandLower: string = command.toLowerCase()

      if (
        contentLower.startsWith(`${commandLower} `) ||
        contentLower === commandLower
      ) {
        console.log(`Running the command ${commandLower}`)
        callback(message)
      }
    })
  })
}
