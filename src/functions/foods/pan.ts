import { Client, Message, MessageEmbed, MessageAttachment } from "discord.js"
import { command } from "../../command/command"
import { colors } from "../../utils/colors"

export const pan = (client: Client): void => {
  let aliases = ["pan"]

  // Toma el directorio como raiz
  const msgAtachment: MessageAttachment = new MessageAttachment(
    "./src/images/pan.png",
    "pan.png"
  )

  command(client, aliases, (message: Message): void => {
    const embed: MessageEmbed = new MessageEmbed()
      .setTitle("Pan")
      .setColor(colors.brown)
      .attachFiles([msgAtachment])
      .setImage("attachment://pan.png")

    message.channel.send({ embed })
  })
}
