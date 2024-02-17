import { Argv } from 'yargs'
import { logger } from '../logger'
import { bold, green } from 'picocolors'
import prompts from 'prompts'

interface GreetingArgv {}

export const command = 'greeting'
export const describe = 'Displays interactive prompts to demonstrate user input handling.'
export const aliases = ['g']

export function builder(yargs: Argv<GreetingArgv>): Argv {
  return yargs
}

export async function handler() {
  const { username } = await prompts({
    type: 'text',
    name: 'username',
    message: 'What is your name?',
  })
  logger.log(`Hello, ${green(bold(username))}!`)

  const { mood } = await prompts({
    type: 'select',
    message: 'How are you?',
    name: 'mood',
    choices: [
      { title: '👌', value: '👌' },
      { title: '👍', value: '👍' },
      { title: '👎', value: '👎' },
      {
        title: '🤬',
        value: '🤬',
      },
    ],
  })
  logger.log(`${green(bold(username))} ${mood}, Ciao!`)
}
