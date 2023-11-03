import { randomUUID } from 'node:crypto';

import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js';

const database = new Database();

// Route parameters, request body, query parameters


export  const routes = [
  {
    method: 'GET',
    // path: '/users',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      console.log(req.query)

      const { search } = req.query

      // const users = database.select('users')
      const users = database.select('users', search ? {
        name: search,
        email: search
      } : null)

      return res.end(JSON.stringify(users))
    }
  },
  {
    method: 'POST',
    // path: '/users',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const {name, email} = req.body

      const user = {
        id: randomUUID(),
        name,
        email,
      }

      database.insert('users', user)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {

      const { id } = req.params
      const { name, email } = req.body

      database.update('users', id, {
        name,
        email,
      });
      
      return res.writeHead(204).end()
    },
  },
  {
    method: 'DELETE',
    // path: '/users',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {

      const {id } = req.params

      database.delete('users', id);

      console.log('Delete', req.params)
      // return res.end()
      return res.writeHead(204).end()
    },
  }
]