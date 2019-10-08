import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { UserService } from 'src/app/services/user.service';
import { itemsInterface } from 'src/app/interfaces/itemsInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  items: Array<itemsInterface> = [];
  
  seller: any;

  buscar: string;

  constructor(private itemService: ItemsService, private userService: UserService, private router: Router) { }

  ngOnInit() {
      this.mostrar();
 
    }
    
  mostrar() {
    console.log(this.buscar);
    this.items = [];
    this.itemService.getAll(this.buscar)
      .subscribe(data => {
        let aux: Array<any> = data.results;
        aux.forEach((itemTemp) => {
          this.userService.getSeller(itemTemp.seller.id.toString())
            .subscribe(data => {
              let item: itemsInterface = {
                itemName: itemTemp.title,
                itemImg: itemTemp.thumbnail,
                sellerName: data.nickname,
                itemCost: itemTemp.price,
                itemId: itemTemp.id
              };
              this.items.push(item);
           
            })
        })
      });
  }
  onSelected(item: itemsInterface){
    this.router.navigateByUrl("/detalles/" + item.itemId);
  }

  onKeydown(event){
    this.mostrar();
    console.log(event);
    
  }
}
