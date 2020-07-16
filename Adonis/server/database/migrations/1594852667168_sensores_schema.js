'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SensoresSchema extends Schema {
  up () {
    this.create('sensores', (table) => {
      table.increments()
      table.string('nombre')
      table.string('ubicacion')
      table.timestamps()
    })
  }

  down () {
    this.drop('sensores')
  }
}

module.exports = SensoresSchema
