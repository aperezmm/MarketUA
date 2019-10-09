import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';


@Injectable({
    providedIn: 'root'
})

export class CategoriaService{
    public API = 'https://api.mercadolibre.com/sites/MCO/categories';

    constructor(private http: HttpClient){

    }
    categories():Observable<Categoria[]>{
        return this.http.get<Categoria[]>(this.API);
    }
}
