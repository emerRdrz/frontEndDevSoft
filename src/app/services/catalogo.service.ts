import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }


  private URL = 'http://localhost:8081/apiRest/catalogo/'


  getBodegas(pais: any, bodega: any){
    return this.http.get<any>(this.URL + 'bodega/byparameters/' + pais + '/' + bodega)
  }

  getPais(){
    return this.http.get<any>(this.URL + 'pais')
  }

  getTipobodega(){
    return this.http.get<any>(this.URL + 'tipoBodega')
  }

  getTipoProducto(){
    return this.http.get<any>(this.URL + 'tipoProducto')
  }

}
