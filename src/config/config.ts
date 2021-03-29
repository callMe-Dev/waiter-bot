require("dotenv").config()
import { IConfig } from "../interfaces"

export const config: IConfig = {
  token: process.env.DISCORD_TOKEN,
  prefix: "~",
}
