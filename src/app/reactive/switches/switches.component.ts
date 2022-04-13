import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  persona = {
    genero: `F`,
    notificaciones: true,
  }
  
  miFormulario: FormGroup = this.fb.group({
    genero: [ this.persona.genero, Validators.required ],
    notificaciones: [ this.persona.notificaciones, Validators.required ],
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
