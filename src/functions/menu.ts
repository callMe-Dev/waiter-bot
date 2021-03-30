import { Client, Message, MessageEmbed } from "discord.js"
import { command } from "../command/command"
import { colors } from "../utils/colors"

export const menu = (client: Client) => {
  let aliases = ["menu", "carta"]

  command(client, aliases, (message: Message) => {
    const { guild } = message
    const { name }: any = guild
    const icon: any = guild?.iconURL()

    const embed: MessageEmbed = new MessageEmbed()
      .setAuthor(name, icon)
      .setTitle("Menu")
      .setColor(colors.lemon).setDescription(`
      Bienvenidos a la cafeteria de callMeDev :D
      Puedes pedir alguna comida o bebida de nuestro menu
      
      **comida**
        - pan

      **bebidas**
      `)

    message.channel.send(embed)
  })
}
