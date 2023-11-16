import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

// http://localhost:3333/hello

/* app.get('/hello', () => {
  return 'Hello Word'
})
 */

app.get('/hello', async () => {
  /* 
  const tables = await knex('sqlite_schema').select('*')

  return tables
   */

/* 
  const transaction = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transação de teste',
    amount: 1000,
  }).returning('*')

  return transaction
   */

  // const transactions = await knex('transactions').select('*')
  const transactions = await knex('transactions')
  .where('amount', 500)
  .select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })

// EcmaScript Lint
