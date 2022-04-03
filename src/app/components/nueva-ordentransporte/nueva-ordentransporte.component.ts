import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { Orden, OrdentransporteService } from 'src/app/services/ordentransporte.service';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-nueva-ordentransporte',
  templateUrl: './nueva-ordentransporte.component.html',
  styleUrls: ['./nueva-ordentransporte.component.css']
})
export class NuevaOrdentransporteComponent implements OnInit {


  orden : Orden = {
    precioDescuento: 0
  }
  
  tipoBodegaList : any = [];
  tipoProductoList : any = [];
  bodegaList : any = [];
  paisList : any = [];
  tipoBodega : any ;
  pais : any;
  outcome : string = 'Número de Placa'

  

  constructor(private router: Router, private ordentransporteService: OrdentransporteService, private catalogoService: CatalogoService, private signingService : SigninService) { }


  ngOnInit(): void {
    this.loadCatalogo();
  }

  loadCatalogo(){
     

      this.catalogoService.getPais().subscribe(
        res => {
          this.paisList = res?.response
        },
        err => console.log(err)
        
      )

      this.catalogoService.getTipoProducto().subscribe(
        res => {
          this.tipoProductoList = res?.response
        },
        err => console.log(err)
        
      )

      this.catalogoService.getTipobodega().subscribe(
        res => {
          this.tipoBodegaList = res?.response
        },
        err => console.log(err)
        
      )

      
  }


  onChange(deviceValue:any) {

    this.catalogoService.getBodegas(this.pais, this.tipoBodega).subscribe(
      res => {
        this.bodegaList = res?.response
      },
      err => console.log(err)
      
    )

  }


  onChangeTipoBodega(deviceValue:any) {
    if(this.tipoBodega == 1){
      this.outcome = 'Número de Placa '
    }else{
      this.outcome = 'Número de Flota '
    }

  }

  agregar(){
    let usuario = this.signingService.getIdUser();
    console.log("nueva orden",this.orden)
    this.ordentransporteService.savedOrdenTransporte(this.orden).subscribe(
      res => console.log(res)
      , err => console.log(err)
    );
    
    this.router.navigate(['/ordenes'])
  }

}

