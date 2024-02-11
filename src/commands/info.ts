import { ArgumentsCamelCase, Argv } from 'yargs'
import { logger } from '../logger'
import * as process from 'node:process'
import { blue, bold, gray, green, red, yellow } from 'picocolors'

interface InfoArgv {
  full?: boolean
}

export const command = 'info'
export const describe = 'Show the info'
export const aliases = ['i']

export function builder(yargs: Argv): Argv<InfoArgv> {
  return yargs.option('full', {
    type: 'boolean',
    alias: 'f',
    default: true,
  })
}

export async function handler(argv: ArgumentsCamelCase<InfoArgv>) {
  logger.info(bold(red('Simple command for show information of cli application')))
  logger.info(green('Node:'), bold(process.version))
  logger.info(yellow('Processor architecture:'), process.arch)
  logger.info(blue('Current dir:'), process.cwd())
  logger.info(gray('Memory usage:'), process.memoryUsage())
  logger.info(gray('Argv:'), argv)
  if (argv.full) {
    logger.info(gray(bold('Process config:')), process.config)
  }
}
