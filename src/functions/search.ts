import { Client, Message, MessageEmbed } from 'discord.js'
import { command } from '../command/command'
import FoodSearch from '../modules/FoodSearch'
import { colors } from '../utils/colors'

export const search = (client: Client): void => {
  const aliases = ['search']

  command(
    client,
    aliases,
    async (message: Message): Promise<void> => {
      let msgLoading: any = null
      try {
        const args = message.content.split(' ').slice(1)
        const search = args.join(' ')
        if (search) {
          console.log('Args', args)
          /** Loading */
          const embedLoading: MessageEmbed = new MessageEmbed()
            .setTitle('Loading')
            .setDescription('Searching for food...')
          msgLoading = await message.reply(embedLoading)

          const foodSearch = new FoodSearch(search)
          await foodSearch.set()
          const food = foodSearch.get()
          const embedFood: MessageEmbed = new MessageEmbed()
            .setTitle(food.name)
            .setColor(colors.brown)

          if (food.image) embedFood.setImage(food.image)

          if (food.description) {
            embedFood.setDescription(food.description)
          }

          msgLoading.edit(embedFood)
        } else {
          throw Error('No name arg')
        }
      } catch (err) {
        const embed: MessageEmbed = new MessageEmbed()
          .setTitle('Error')
          .setDescription(err.message as string)
        if (msgLoading) {
          msgLoading.edit(embed)
        } else {
          message.reply(embed)
        }
      }
    }
  )
}
