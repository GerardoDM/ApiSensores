'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sensor extends Model {

    sensorLectura(){
        return this.hasMany('App/Models/SensorLectura')
    }

    static get table () {
        return 'sensores'
      }
}

module.exports = Sensor
