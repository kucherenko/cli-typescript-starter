import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['bin/run.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
})
