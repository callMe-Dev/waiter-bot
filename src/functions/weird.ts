import { Client, Message } from 'discord.js'
import { command } from '../command/command'
import { random } from '../utils/randomNumber'

/**
 *
 * @param {Client} client
 */
export const weird = (client: Client): void => {
  const aliases = ['weird']

  const weirdEmojis: Array<string> = [
    '<:gordonDisappoint:823577648386146356>',
    '<:cheemsDoge:823576635012939786>',
  ]
  const randomNumber: number = random(weirdEmojis.length)

  command(client, aliases, (message: Message) => {
    message.channel.send(weirdEmojis[randomNumber])
  })
}
