'use strict'

const Sensor = use('App/Models/Sensor')
const SensorLectura = use('App/Models/SensorLectura')

class SensorLecturaController {

    async create({request, response}){


        try {

            let { temperatura, humedad  } = await request.all();
            const sensorLectura = new SensorLectura();

            let sensor_id = await Sensor.find(sensor_id)

            if(sensor_id != null){


                sensorLectura.fill({
                    sensor_id,
                    temperatura,
                    humedad
    
    
                   
                });
        
                await sensorLectura.save()
                return sensorLectura;
    
    
                

            }
           
            
        } catch (error) {

            return response.json('No existe ese sensor')
            
        }
       
    }

}

module.exports = SensorLecturaController
