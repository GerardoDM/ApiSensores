import { Component, OnInit } from '@angular/core';
import { Lectura, LecturasService, objeto_promedio_lecturas, objeto_lectura } from 'src/app/services/lecturas.service';
import { SensoresService, Sensor } from 'src/app/services/sensores.service';
import { Router, ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators'


@Component({
  selector: 'app-lecturas',
  templateUrl: './lecturas.component.html',
  styleUrls: ['./lecturas.component.css']
})
export class LecturasComponent implements OnInit {



  datos: Lectura = {
    _id: "",
    temperatura: null,
    humedad: null,
    lecturas_dht : null,
    promedio_lecturas: null,
    lecturas : null,
    id: ""
    
    
}

 datosobjetolectura : objeto_lectura = {

  _id : "",
	hora_registro: null,
	fecha_registro: null,
	lecturas: null
}

datospromlectura : objeto_promedio_lecturas = {

  _id : "",
	lecturas_dht_id : "",
	hora_registro : null,
	fecha_registro : null,
	temperatura : null,
	humedad : null
}

    datosSensor: Sensor = {
      id: null,
      nombre: "",
      ubicacion: "",
      editMode: false
    }

    lecturasList : Lectura[]
    sensoressList : Sensor[]

  constructor(private Slectura: LecturasService, private sensores: SensoresService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.datosSensor.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.datosSensor.nombre = this.route.snapshot.paramMap.get('nombre')

  
    this.bring()


  }
    

  bring(){

    this.Slectura.showLecturas(this.datosSensor.id)
    .subscribe(data => {

      console.log(data.lecturas_dht[0].lecturas)
      console.log(data.lecturas_dht[0].hora_registro)
      console.log(data.lecturas_dht[0].fecha_registro)

      const res = data.lecturas_dht[0].lecturas
      const foo = data.lecturas_dht[0]._id
      const bar = data.lecturas_dht[0].hora_registro
      const foobar = data.lecturas_dht[0].fecha_registro

      this.lecturasList = res
      this.id = foo
      this.hora_registro = bar
      this.fecha_registro = foobar
     
     
      // //@ts-ignore
      // const res = data.lecturas_dht[0].lecturas
      // //@ts-ignore
      // const foo = data.lecturas_dht[0]._id
      // console.log(res);
      // this.lecturasList = res
      // //@ts-ignore
      // this.id = foo 
     
    })
  
    
      
  } 


  showWeapons(): void{
    this.Slectura.showLecturas(this.datosSensor.id).subscribe(lecturasList => ( this.lecturasList = lecturasList))
    

  }

  mostrarTabla(){
    
    var x = document.getElementById("tabla");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

      
    


  }

}
