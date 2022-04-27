import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre    : [``, [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern) ] ],
    email     : [``, [Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [ this.emailValidator ] ],
    username  : [``, [Validators.required, this.validatorService.noPuedeSerStrider ] ],
    password  : [``, [Validators.required, Validators.minLength(6) ] ],
    password2 : [``, [Validators.required ] ],
  },
  {
    validators: [ this.validatorService.camposIguales( `password`, `password2`) ]
  });

  constructor( private fb: FormBuilder, private validatorService: ValidatorService, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre  : `Salix B`,
      email   : `test1@test.com`,
      username: `Salix_8`
    });
  }

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get(`email`)?.errors;

    if (errors?.required) {
      return `Email es obligatorio`;
    } else if (errors?.pattern) {
      return `El email no tiene el formato correcto`;
    } else if(errors?.emailTomado){
      return `El email ya existe`;
    }
    
    return ``;
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched;
  }

}
