import { Component, OnInit, Input } from '@angular/core';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  @Input() itemsCarrito: Array<CarritoInterface>;
  @Input() tablaOn : boolean;
  
  suma: number = 0;

  constructor() { }

  ngOnInit() {
    if(this.itemsCarrito){
    this.itemsCarrito.forEach(item => {
      this.suma = this.suma + item.cost;
      })}
      console.log(this.itemsCarrito);
      }

  remove(item: any){
  this.itemsCarrito.splice(this.itemsCarrito.indexOf(item), 1);
  localStorage.setItem("carrito", JSON.stringify(this.itemsCarrito));
  }
    
  }




