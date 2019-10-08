import { Component, OnInit } from '@angular/core';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';


@Component({
  selector: 'app-buscar-items',
  templateUrl: './buscar-items.component.html',
  styleUrls: ['./buscar-items.component.css']
})
export class BuscarItemsComponent implements OnInit {

  carrito : Array<CarritoInterface> = [];

  constructor() { 
     
  }
  
  ngOnInit() {
    if(JSON.parse( localStorage.getItem("carrito")))
    this.carrito = JSON.parse( localStorage.getItem("carrito"));
  }

}
