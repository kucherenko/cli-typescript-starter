import { Argv } from 'yargs'
import { logger } from '../logger'
import { bold, green } from 'picocolors'

const qoa = require('qoa')

interface GreetingArgv {}

export const command = 'greeting'
export const describe = 'Displays interactive prompts to demonstrate user input handling.'
export const aliases = ['g']

export function builder(yargs: Argv<GreetingArgv>): Argv {
  return yargs
}

export async function handler() {
  const { username } = await qoa.input({
    query: 'Type your name:',
    handle: 'username',
  })
  logger.log(`Hello, ${green(bold(username))}!`)
  const { mood } = await qoa.interactive({
    type: 'interactive',
    query: 'How are you?',
    handle: 'mood',
    symbol: '>',
    menu: ['👌', '👍', '👎', '🤬'],
  })
  logger.log(`${green(bold(username))} ${mood}, Ciao!`)
}
