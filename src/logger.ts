import { Signale } from 'signale'

export const logger = new Signale({
  types: {
    idea: {
      badge: '💡',
      color: 'yellow',
      label: 'idea',
      logLevel: 'info',
    },
  },
})
