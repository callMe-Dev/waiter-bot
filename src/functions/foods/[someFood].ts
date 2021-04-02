import { Client, Message, MessageEmbed, MessageAttachment } from "discord.js"
import { command } from "../../command/command"
import { colors } from "../../utils/colors"
import { IFood } from "../../interfaces/"
import { foods } from "../../utils/foods"

/**
 *
 * @param client: Client
 * @param aliases: Array<string> | String[]
 * @param index: number
 *
 */
export const food = (
  client: Client,
  aliases: Array<string>,
  index: number
): void => {
  command(client, aliases, (message: Message) => {
    const foodReturned = foods.map((food: IFood): void => {
      if (index === food.index) {
        const msgAtachment: MessageAttachment = new MessageAttachment(
          `${food?.imgUrl}`,
          `${food?.imgName}`
        )

        const embed: MessageEmbed = new MessageEmbed()
          .setTitle(`${food.name.toUpperCase()}`)
          .setDescription(
            `
          **Comete un ${food.name}**
          `
          )
          .setColor(colors.brown)
          .attachFiles([msgAtachment])
          .setImage(`attachment://${food.imgName}`)

        message.channel.send({ embed })
      }
    })
  })
}
