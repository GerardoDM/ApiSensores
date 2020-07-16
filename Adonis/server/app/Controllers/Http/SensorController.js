'use strict'

const Sensor = use('App/Models/Sensor')

class SensorController {

    async create({request}){
        const { nombre, ubicacion } = await request.all();
        const sensor = new Sensor();
        sensor.fill({
            nombre,
            ubicacion,
           
        });

        await sensor.save()
        return sensor;
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
