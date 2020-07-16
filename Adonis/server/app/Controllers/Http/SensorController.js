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

    async registerLecturas({request,response}){

      const request_data = await request.all()
      const sensor_id = request_data.sensor_id

      // if is needed to temporarily clear all arrays' data uncomment this procedure
      // when you are done, comment it again
      // this procedure would be set on another method or deleted
      /*return await SensorMongo.update(
        {sensor_id:sensor_id},
        {$set:{
            "lecturas_dht":Schema.Types.Array,
            "promedio_lecturas":Schema.Types.Array
          }
        }
      )*/

      const lecturas_length = request_data.lecturas.length
      const _object_id = new mongoose.Types.ObjectId()

      let _object = {
        _id: _object_id,
        lecturas:[]
      }

      let sumatoriaTemperatura = 0
      let sumatoriaHumedad = 0

      for(let i=0;i<lecturas_length;i++){

        const humedad = request_data.lecturas[i].humedad
        const temperatura = request_data.lecturas[i].temperatura

        _object.lecturas.push({
          _id: new mongoose.Types.ObjectId(),
          temperatura: temperatura,
          humedad: humedad
        })

        sumatoriaTemperatura += temperatura
        sumatoriaHumedad += humedad

      }

      let promedio_lecturas = {
        _id: new mongoose.Types.ObjectId(),
        lecturas_dht_id:_object_id,
        temperatura: sumatoriaTemperatura/lecturas_length,
        humedad: sumatoriaHumedad/lecturas_length
      }

      return await SensorMongo.update(
        {sensor_id:sensor_id},
        {$push:{
            lecturas_dht:_object,
            promedio_lecturas: promedio_lecturas
          }
        }
      )

    }

    async getLecturas({params,response}){

      const {sensor_id} = params ;

      return await SensorMongo.findOne({sensor_id:sensor_id});

    }

}

module.exports = SensorController
