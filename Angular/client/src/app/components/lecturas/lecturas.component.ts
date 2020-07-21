import { Component, OnInit } from '@angular/core';
import { LecturasService} from 'src/app/services/lecturas.service';
import { Router, ActivatedRoute } from '@angular/router';
import {SensoresService} from "../../services/sensores.service";
import {Sensor} from "../../interfaces/sensor";
import {ObjetoLectura} from "../../interfaces/objeto-lectura";
import {PromedioLectura} from "../../interfaces/promedio-lectura";
import {Lectura} from "../../interfaces/lectura";
import {LecturasDHT} from "../../interfaces/lecturas-dht";


@Component({
  selector: 'app-lecturas',
  templateUrl: './lecturas.component.html',
  styleUrls: ['./lecturas.component.css']
})
export class LecturasComponent implements OnInit {

  constructor(private Slectura: LecturasService, private sensores: SensoresService, private route : ActivatedRoute, private router: Router) { }

  sensor:Sensor = null;
  objetoLectura:ObjetoLectura = null;

  ngOnInit(): void {

    this.sensor = new class implements Sensor {
      editMode: boolean;
      id: Number;
      nombre: string;
      ubicacion: string;
    }

    this.objetoLectura = new class implements ObjetoLectura {
      fecha_registro: string;
      hora_registro: string;
      lecturas_dht: Array<LecturasDHT>;
      promedio_lecturas: Array<PromedioLectura>;
      sensor_id: number | string;
    }

    this.sensor.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.sensor.nombre = this.route.snapshot.paramMap.get('nombre')

    this.bring()

  }


  bring(){

    this.Slectura.showLecturas(this.sensor.id)
    .subscribe(data => {
      this.objetoLectura = data;
      console.log(this.objetoLectura);

    });



  }

}
