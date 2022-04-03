import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SigninService } from './signin.service';

@Injectable({
  providedIn: 'root'
})
export class OrdentransporteService {

  private URL = 'http://localhost:8081/apiRest/ordentransporte'

  constructor(private http: HttpClient, private signinService : SigninService) { }
  
  getOrdenTransporte(){
    return this.http.get<any>(this.URL + '?size=1000&sort=idOrdenTransporte%2Cdesc')
  }

  savedOrdenTransporte(orden: Orden){
    console.log(this.signinService.getIdUser())
    orden.usuario = 1;
    return this.http.post<any>(this.URL, orden);
  }

  updatedOrdenTransporte(orden: Orden){
    return this.http.put<any>(this.URL, orden);
  }

  deletedOrdenTransporte(id: any){
    return this.http.delete<any>(this.URL + '/' + id)
  }

}

export interface Orden{
  cantidadProducto?: Number,
  fechaEntrega?: string,
  fechaRegistro?: string,
  idOrdenTransporte?: Number,
  numeroGuia?: string,
  placa?: string,
  porcentajeDescuento?: Number,
  precioDescuento?: Number,
  precioEnvio?: Number,
  tipoProducto?: Number,
  bodega?: Number,
  usuario?: Number
}
