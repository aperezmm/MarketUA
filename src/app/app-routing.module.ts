import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleItemComponent } from './components/detalle-item/detalle-item.component';
import { BuscarItemsComponent } from './components/buscar-items/buscar-items.component';
import { DetalleCarritoComponent } from "././/components/detalle-carrito/detalle-carrito.component";

const routes: Routes = [
  {
  path: "item", 
  component: DetalleItemComponent
  },
  {
  path: "", 
  component: BuscarItemsComponent
  },
  {
  path: "detalles/:id",
  component: DetalleItemComponent
  },
  {
    path: "carrito",
    component: DetalleCarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
