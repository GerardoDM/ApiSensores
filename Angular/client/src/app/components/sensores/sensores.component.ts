import { Component, OnInit } from '@angular/core';
import { SensoresService, Sensor } from 'src/app/services/sensores.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css']
})
export class SensoresComponent implements OnInit {

  
  inboundClick = false;

  datos: Sensor = {
    id: null,
    nombre: "",
    ubicacion: "",
    
    editMode: false
}

  sensoresList : Sensor[]
  

  constructor(private sensores: SensoresService, private router: Router) { }

  ngOnInit(): void {
    this.getSensores()
  
  }

  

  



  create(){

    this.sensores.create(this.datos).subscribe(() =>

    this.getSensores(),
        
      err => {
          console.error(err)
      }
      
    )
  
  } 

    update(){

    this.sensores.edit(this.datos).subscribe(() =>

    this.getSensores(),
        
      err => {
          console.error(err)
      }
      
    )

    document.getElementById("btnSubmit").removeAttribute("disabled")


  } 
    
    
  getSensores(): void{
    this.sensores.getSensores().subscribe(sensoresList => ( this.sensoresList = sensoresList))

    }

    delete(datos: Sensor): void {
      this.sensoresList = this.sensoresList.filter(h => h !== datos)
      this.sensores.delete(datos.id).subscribe(() => console.log('datos borrados'))
      console.log(datos.id)
    }

    edit(sensor : Sensor){
      this.datos = sensor
      this.datos.editMode = true
      console.log(this.datos.editMode)

    }

    resetForm(form: NgForm){
           
      form.resetForm(); // or form.reset();
      
    }

    makeVisible():void{
      this.inboundClick = true;
      document.getElementById("btnSubmit").setAttribute("disabled", "disabled")
    }


}
