import { Client, Message, MessageEmbed, MessageAttachment } from "discord.js"
import { random } from "../../utils/randomNumber"
import { command } from "../../command/command"
import { colors } from "../../utils/colors"
import { foods } from "../../utils/foods"
import { IFood } from "../../interfaces/"

export const food = (client: Client): void => {
  let aliases = ["food"]

  command(client, aliases, async (message: Message) => {
    const foodReturned = foods.map((food: IFood): void => {
      const randomLen: number = random(foods.length)

      if (randomLen === food.index) {
        console.log(randomLen, food.index)

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
