import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './services/items.service';
import { BuscarItemsComponent } from './components/buscar-items/buscar-items.component';
import { FormsModule } from '@angular/forms';
import { DetalleItemComponent } from './components/detalle-item/detalle-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarritoComponent } from './components/home/carrito/carrito.component';
import { FiltroComponent } from './components/home/filtro/filtro.component';
import { ContenidoComponent } from './components/home/contenido/contenido.component';
import { DetalleCarritoComponent } from './components/detalle-carrito/detalle-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarItemsComponent,
    DetalleItemComponent,
    NavbarComponent,
    CarritoComponent,
    FiltroComponent,
    ContenidoComponent,
    DetalleCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
