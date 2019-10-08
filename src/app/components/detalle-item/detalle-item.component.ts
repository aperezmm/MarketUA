import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.css']
})
export class DetalleItemComponent implements OnInit {

  tablaOn :boolean;
  item : any = {};
  carrito : Array<CarritoInterface> = [];
  suma: number = 0;
  images: Array<any> = [];

  constructor(private itemService: ItemsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id  = this.route.snapshot.params["id"];
    this.itemService.getItemById(id).subscribe(data => {
       this.item = data;
       console.log(this.item);
       this.images.push(this.item.pictures);
       this.images = this.images[0];
    });

    if(JSON.parse( localStorage.getItem("carrito")))
    this.carrito = JSON.parse( localStorage.getItem("carrito"));
  }
  agregarCarrito(){
    let itemCarrito:CarritoInterface = {
      item : this.item.title,
      cost : this.item.price,
      id : this.item.id,
      img : this.item.pictures[0].url
    }
    this.carrito.push(itemCarrito);
    localStorage.setItem("carrito" , JSON.stringify(this.carrito));
    this.tablaOn = true;
  }

}
