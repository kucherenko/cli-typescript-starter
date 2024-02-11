import { expect } from '@jest/globals'
import { ArgumentsCamelCase, Argv } from 'yargs'

import { commands } from './commands'

describe('First Test Case', () => {
  it('should pass', () => {
    expect(true).toBeTruthy()
  })

  it('command "info" defined and does not throw', () => {
    const args = {
      _: ['info'],
      group: true,
      g: true,
      $0: 'bin/run.ts',
    }
    expect(commands[0]).toBeDefined()
    expect(() => {
      commands[0]?.handler(args as unknown as ArgumentsCamelCase<Argv>)
    }).not.toThrow()
  })
})
