'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SensorLectura extends Model {

    sensor(){
        return this.belongsTo('App/Models/Sensor')
    }
}

module.exports = SensorLectura
