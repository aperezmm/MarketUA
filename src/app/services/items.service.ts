import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { itemsInterface } from '../interfaces/itemsInterface';

@Injectable({providedIn: 'root'})
export class ItemsService {
  public API = 'https://api.mercadolibre.com';
   
  

  constructor(private http: HttpClient) {
  }

  getAll(filtro: string): Observable<any> {
    return this.http.get(this.API+ "/sites/MCO/search?q=" + filtro);
  }

  getItemById(id: string): Observable<any>{
    return this.http.get(this.API+ "/items/" + id);
  }

  getItemByCategory(idCategory: string) {
    return this.http.get(this.API + "/sites/MCO/search?category=" + idCategory);
  }

 }