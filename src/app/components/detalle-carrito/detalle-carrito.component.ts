import { Component, OnInit, Input } from '@angular/core';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';
import { itemsInterface } from 'src/app/interfaces/itemsInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-carrito',
  templateUrl: './detalle-carrito.component.html',
  styleUrls: ['./detalle-carrito.component.css']
})
export class DetalleCarritoComponent implements OnInit {

  carrito : Array<CarritoInterface> = [];
  
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.getItems();
  }

  onSelected(item: CarritoInterface){
    this.router.navigateByUrl("/detalles/" + item.id);
  }

  getItems(){
    this.carrito = JSON.parse( localStorage.getItem("carrito"));
     console.log(this.carrito);
  }

}
