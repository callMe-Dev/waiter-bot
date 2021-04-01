import { Client, Message, MessageEmbed } from "discord.js"
import { command } from "../command/command"
import { colors } from "../utils/colors"
import { config } from "../config/config"

export const help = (client: Client): void => {
  let aliases = ["help", "h"]

  command(client, aliases, (message: Message): void => {
    const { guild } = message
    const { name }: any = guild
    const icon: any = guild?.iconURL()

    const embed: MessageEmbed = new MessageEmbed()
      .setAuthor(name, icon)
      .setTitle("Help?")
      .setColor(colors.lemon)
      .setDescription(
        `
      Bienvenidos a la cafeteria de callMeDev :D
      Puedes pedir alguna comida o bebida de nuestro menu
      
      **comida**
        - pan

      **bebidas**
        - coca
      `
      )
      .setFooter(`Solamente coloca el prefijo ${config?.prefix}`)

    message.channel.send(embed)
  })
}
