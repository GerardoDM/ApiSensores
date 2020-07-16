'use strict'

const Sensor = use('App/Models/Sensor')
const SensorLectura = use('App/Models/SensorLectura')

class SensorLecturaController {

    async create({request, response}){


        

            const { sensor_id ,temperatura, humedad  } = await request.all();
            const sensorLectura = new SensorLectura();

        

                sensorLectura.fill({
                    sensor_id,
                    temperatura,
                    humedad
    
    
                   
                });
        
                await sensorLectura.save()
                return sensorLectura;

        
       
    }

}

module.exports = SensorLecturaController
