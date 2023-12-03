import { throws } from 'assert'
import 'dotenv/config'
import { z } from 'zod'

// joi, yup, zod
// development, test, production

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

// export const env = envSchema.parse(process.env)
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('⚠️  Invalid enviroment variables!', _env.error.format())

  throw new Error('Invalid enviroment variables')
}

export const env = _env.data
