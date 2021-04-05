/**
 * En este archivo puede tomar la estructura de un comando, solamente cambien los textos
 * que se encuentran entre corchetes [ ] por el tipo de comando que necesitan
 *
 */

import { Client, Message, MessageEmbed } from 'discord.js'
import { command } from '../command/command'
import { colors } from '../utils/colors'

// Remuevan el :any al momento de hacer su comando
export const [name]: any = (client: Client): void => {
  const aliases = ['']

  command(client, aliases, (message: Message): void => {
    const embed: MessageEmbed = new MessageEmbed()
      .setTitle('')
      .setDescription('')
      .setColor(colors.red)
      .setImage('')

    message.channel.send(embed)
  })
}
