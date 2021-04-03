import {
  Client,
  Message,
  MessageEmbed,
  MessageAttachment,
  Guild,
} from "discord.js"
import { command } from "../../command/command"
import { colors } from "../../utils/colors"
import { IFood } from "../../interfaces/"
import { foods } from "../../utils/foods"

/**
 *
 * @param client: Client
 * @param aliases: Array<string> | String[]
 * @param index: number
 * @param color: string | number
 */
export const food = (
  client: Client,
  aliases: Array<string>,
  index: number,
  color: string | number = colors.brown
): void => {
  command(client, aliases, (message: Message) => {
    const { guild }: any = message
    const { name } = guild
    const icon = guild.iconURL()

    const foodReturned = foods.map((food: IFood): void => {
      if (index === food.index) {
        const msgAtachment: MessageAttachment = new MessageAttachment(
          `${food?.imgUrl}`,
          `${food?.imgName}`
        )

        const embed: MessageEmbed = new MessageEmbed()
          .setAuthor(name, icon)
          .setDescription(
            `
          Aqui esta su pedido, que lo disfrute:
          **${food.name}**
          `
          )
          .setColor(color)
          .attachFiles([msgAtachment])
          .setImage(`attachment://${food.imgName}`)

        message.channel.send({ embed })
      }
    })
  })
}
