// { "users": [...]}

import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

console.log(databasePath);

export class Database {

  #database = {}

  constructor() {
    fs.readFile(databasePath, 'utf8').then(data => {
      this.#database = JSON.parse(data)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist() {
    // fs.writeFile('db.json', JSON.stringify(this.#database))
    fs.writeFile(databasePath, JSON.stringify(this.#database))

  }

  // { name: "Diego", email: "Diego" }
  // [['name','Diego'], ['email', 'Diego'] ]

  // select(table) {
    select(table, search) {
    // const data = this.#database[table] ?? []
    let data = this.#database[table] ?? []

    // let it change

    if (search) {
      data = data.filter(row => {
        return Object.entries(search).some(([key, value]) => {
          // return row[key].includes(value)
          return row[key].toLowerCase().includes(value.toLowerCase())
        })
      })
    }

    return data
  }

  insert(table, data) {
    if(Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist();

    return data;
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      this.#database[table][rowIndex] = {id, ...data}
      console.log('Update:', data)
      this.#persist()
    }
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
    }
  }
 
}