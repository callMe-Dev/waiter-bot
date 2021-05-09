import { Client, Message, MessageEmbed } from 'discord.js'
import { command } from '../command/command'
import { colors } from '../utils/colors'
import { config } from '../config/config'
import { foods } from '../utils/foods'
import { IFood } from '../interfaces'

/**
 *
 * @param {Client} client
 */
export const help = (client: Client): void => {
  const aliases = ['help', 'h']

  command(client, aliases, (message: Message): void => {
    const { guild } = message
    const { name }: any = guild
    const icon: any = guild?.iconURL()

    const embed: MessageEmbed = new MessageEmbed()
      .setAuthor(name, icon)
      .setTitle('Help?')
      .setColor(colors.lemon)
      .setDescription(
        `
      Bienvenidos a la cafeteria de callMeDev :D
      Puedes pedir alguna comida o bebida de nuestro menu
      
      **Prueba con alguno de nuestros comandos**
      `
      )
      .addFields(
        foods.map((food: IFood) => ({
          name: food.name,
          value: `${config.prefix}${food.name}`,
        }))
      )
      .setFooter(`Solamente coloca el prefijo ${config?.prefix} `)
      .setTimestamp()
      .setThumbnail(
        'https://media.giphy.com/media/1pA2TskF33668iVDaW/giphy.gif'
      )

    message.channel.send(embed)
  })
}
