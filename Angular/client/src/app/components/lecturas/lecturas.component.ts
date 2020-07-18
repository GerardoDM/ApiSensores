import { Component, OnInit } from '@angular/core';
import { Lectura, LecturasService, objeto_promedio_lecturas, objeto_lectura, lecturas } from 'src/app/services/lecturas.service';
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
   // _id: "",
    //temperatura: null,
    //humedad: null,
    lecturas_dht : null,
    promedio_lecturas: null,
    lecturas : null,
    //id: ""
    
    
  }

  datoslecturas : lecturas = {

    _id: "",
    temperatura: null,
    humedad: null,
    fecha_registro : null,
    hora_registro : null

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

    lecturasList : lecturas[]
    sensoressList : Sensor[]
    dhtList : objeto_lectura[]

  constructor(private Slectura: LecturasService, private sensores: SensoresService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.datosSensor.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.datosSensor.nombre = this.route.snapshot.paramMap.get('nombre')

  
    this.bring()


  }
    

  bring(){

    this.Slectura.showLecturas(this.datosSensor.id)
    .subscribe(data => {

      //@ts-ignore.
      //console.log(data.lecturas_dht[0].lecturas[0]._id)

       //@ts-ignore.
       console.log(data)
    

    //7  const i = 0
       //@ts-ignore.
       //data.lecturas_dht[i].lecturas.forEach(e => {

         //@ts-ignore.
        //console.log(data.lecturas_dht[i].lecturas[i]._id)
      
      //})

      let i = 0
       //@ts-ignore.
      for(i; i < 4 ; i++){

           //@ts-ignore.
          console.log(data.lecturas_dht[i].lecturas[i]._id)
      }

     

     // console.log(this.lecturasList)

      //@ts-ignore.
      //console.log(data.lecturas_dht[0].lecturas)
      //@ts-ignore.
      console.log(data.lecturas_dht[0].hora_registro)
      //@ts-ignore.
      console.log(data.lecturas_dht[0].fecha_registro)

      //@ts-ignore.
      const baz = data.lecturas_dht
      //@ts-ignore.
      const res = data.lecturas_dht[3].lecturas
      //@ts-ignore.
      const foo = data.lecturas_dht[0]._id
      //@ts-ignore.
      const bar = data.lecturas_dht[0].hora_registro
      //@ts-ignore.
      const foobar = data.lecturas_dht[0].fecha_registro

      //this.lecturasList = res

      
      //@ts-ignore.
      



      this.datosobjetolectura._id = foo
      this.datosobjetolectura.hora_registro = bar
      this.datosobjetolectura.fecha_registro = foobar
      this.dhtList = baz
    
     
     
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


  // showWeapons(): void{
  //   this.Slectura.showLecturas(this.datosSensor.id).subscribe(lecturasList => ( this.lecturasList = lecturasList))
    

  // }

  // mostrarTabla(){
    
  //   var x = document.getElementById("tabla");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   } 

  // }

}
