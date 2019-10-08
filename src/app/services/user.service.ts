import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public seller = 'https://api.mercadolibre.com/users/';

  getSeller(sellerId:string): Observable<any>{
    return this.http.get<any>(this.seller + sellerId);
     }
}
