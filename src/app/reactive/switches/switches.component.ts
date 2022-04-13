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
    condiciones: [ false, Validators.requiredTrue ]
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, condiciones: false });

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
      // delete form.condiciones;
      this.persona = rest;
    });
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;
  }

}
