/* const a = 5;
const b = 5;

console.log(a + b); */

// const http = require('http');

// Aplicações HTTP => APIs

// CommonJS ==> require

// ESModules ==> imports/exports

import http from 'node:http';

/* import { randomUUID } from 'node:crypto';

import { Database } from './database.js' */

import { json } from './middlewares/json.js'

import { routes } from './routes.js'

// UUID = Unique Universal ID

// import fastify from 'fastify';

/* - Criar usuários
- Listagem usuários
- Edição de usuários
- Remoção de usuários */

// - HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar um recurso do back-end
// POST = Criar um recurso no back-end
// PUT = Atualizar um recurso no back-end
// PATCH = Atualizar uma informação especifica de um recurso no back-end
// DELETE = Deletar um recurso do back-end

// GET /users → Buscando usuários do back-end
// POST /users = Criar um usuário no back-end

// Stateful - Stateless

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/resposta) → Metadados

// HTTP Status Code

// const users = [];

// const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  console.log(req.headers);

  console.log(method, url);

  /* 
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk)
  }
 */

  await json(req, res);

  // const body = Buffer.concat(buffers).toString();
  /* try {
    // const body = JSON.parse(Buffer.concat(buffers).toString());
    req.body = JSON.parse(Buffer.concat(buffers).toString());

    console.log(req.body.name)
    console.log(req.body)
  } catch {
    req.body = null

  } */

  
  
  
/* 
  if (method === 'GET' && url === '/users') {

    // Early return
    // return res.end('Listagem de usuários')

    const users = database.select('users')

    return res
    // .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }
   */

  // if (method === 'POST' && url === '/users') {

    // const {name, email } = req.body;
/* 
    users.push({
      id : 1,
      name : 'John Doe',
      email : 'johndoe@example.com'
    })
 */
    /* 
    users.push({
      id: 1,
      name,
      email,
    }) */

    // const user = {
      // id: 1,
      // id: randomUUID(),
      // name,
      // email,
    // }

    // database.insert('users', user)


    // return res.end('Criação de usuários')
    // return res.writeHead(201).end();
  // }

// Query Parameters : URL Stateful
// Route Parameters :
// Request Body :
  
  
  // http://localhost:3333/users?userId=1&name=Diego

  const route = routes.find(route => {
    return route.method === method && route.path === url
  });

  console.log(route)

  if (route) {
    return route.handler(req, res)
  }


  // return res.end('Hello World')
  return res.writeHead(404).end('');
})


server.listen(3333);

// localhost:3333





