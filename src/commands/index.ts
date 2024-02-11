import * as info from './info'
import * as greeting from './greeting'
import { CommandModule } from 'yargs'

export const commands: CommandModule[] = [info, greeting]
