import { Client, Message, MessageEmbed } from "discord.js"
import { command } from "../command/command"
import { colors } from "../utils/colors"

export const ping = (client: Client): void => {
  let aliases = ["ping"]

  command(client, aliases, (message: Message): void => {
    const embed: MessageEmbed = new MessageEmbed()
      .setTitle("Gordon Ramsay")
      .setDescription("Pong!")
      .setColor(colors.red)
      .setImage("https://media.giphy.com/media/3o85g2ttYzgw6o661q/giphy.gif")

    message.channel.send(embed)
  })
}
