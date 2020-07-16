'use strict'

const Sensor = use('App/Models/Sensor')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/raspberry1', {useNewUrlParser: true});

const Schema = mongoose.Schema;

const SensorMongoSchema = new Schema({
  _id: Schema.Types.ObjectId,
  sensor_id: Schema.Types.Number,
  lecturas_dht: Schema.Types.Array,
  promedio_lecturas: Schema.Types.Array
});

const SensorMongo = mongoose.model('sensores',SensorMongoSchema)

class SensorController {

    async create({request,response}){
        const { nombre, ubicacion } = await request.all();

        const sensor = await Sensor.create({
          nombre:nombre,
          ubicacion:ubicacion
        })

      const sensor_mongo = await this.createSensorMongo(sensor.id)

      return response.status(200).json({
        sensor:sensor,
        sensor_mongo:sensor_mongo
      })

    }

    async createSensorMongo(sensor_id){

      const sensorMongo = new SensorMongo({
        sensor_id: sensor_id,
        _id: new mongoose.Types.ObjectId()
      })

      await sensorMongo.save()

      return sensorMongo

    }

    async destroy({params}){
        const {id} = params;
        const sensor = await sensor.find(id);
        await sensor.delete();
        return sensor;
    }

    async update({params, request}){
        const {id} = params;
        const sensor = await Sensor.find(id);
        sensor.merge(request.all())
        await Sensor.save();
        return sensor;
    }

    async show({params}){
        const {id} = params;
        const sensor = await Sensor.find(id);


        return sensor;
    }

    async index ({response}) {
        let sensors = await Sensor.all()

        return response.json(sensors)
      }


}

module.exports = SensorController
