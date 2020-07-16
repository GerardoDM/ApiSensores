'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SensoresLecturasSchema extends Schema {
  up () {
    this.create('sensores_lecturas', (table) => {
      table.increments()
      table.integer('sensor_id').unsigned().references('id').inTable('sensores').onDelete('cascade')
      table.float('temperatura', 8, 2)
      table.float('humedad', 8, 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('sensores_lecturas')
  }
}

module.exports = SensoresLecturasSchema
