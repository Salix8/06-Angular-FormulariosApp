import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string,
  ruta: string,
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  templateMenu: MenuItem[] = [
    {
      texto: `Básicos`,
      ruta: `./template/basicos`,
    },
    {
      texto: `Dinamicos`,
      ruta: `./template/dinamicos`,
    },
    {
      texto: `Switches`,
      ruta: `./template/switches`,
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: `Básicos`,
      ruta: `./reactive/basicos`,
    },
    {
      texto: `Dinamicos`,
      ruta: `./reactive/dinamicos`,
    },
    {
      texto: `Switches`,
      ruta: `./reactive/switches`,
    },
  ];

  authMenu: MenuItem[] = [
    {
      texto: `Registro`,
      ruta: `./auth/registro`,
    },
    {
      texto: `Login`,
      ruta: `./auth/login`,
    },
  ];

}
