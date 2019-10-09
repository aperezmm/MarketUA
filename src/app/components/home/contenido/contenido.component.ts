import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { UserService } from 'src/app/services/user.service';
import { itemsInterface } from 'src/app/interfaces/itemsInterface';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  items: Array<itemsInterface> = [];

  seller: any;

  buscar: string;

  categorias: Array<Categoria> = [];

  categoriaSeleccionada: string = null;
  constructor(private itemService: ItemsService, private categoriaService: CategoriaService, private userService: UserService, private router: Router) { }

  ngOnInit() {
      this.mostrar();
      this.obtenerCategorias();
    }

  mostrar() {
    console.log(this.buscar);
    this.items = [];
    this.itemService.getAll(this.buscar)
      .subscribe(data => {
        this.mapearSeller(data);
      });
  }



  onSelected(item: itemsInterface){
    this.router.navigateByUrl("/detalles/" + item.itemId);
  }

  onKeydown(event){
    this.mostrar();
    console.log(event);
  }

  obtenerCategorias() {
    this.categoriaService.categories().subscribe(resultado => {
      this.categorias = resultado;
    });
  }

  filtrarPorCategoria() {
    if (this.categoriaSeleccionada !== null) {
      this.items = [];
      this.itemService.getItemByCategory(this.categoriaSeleccionada).subscribe(data => {
        this.mapearSeller(data);
      });
    }
  }

  private mapearSeller(data: any) {
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
        });
    });
  }

}
