import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orden, OrdentransporteService } from 'src/app/services/ordentransporte.service';


@Component({
  selector: 'app-ordenestransporte',
  templateUrl: './ordenestransporte.component.html',
  styleUrls: ['./ordenestransporte.component.css']
})
export class OrdenestransporteComponent implements OnInit {

  ordenList: Orden[] = []

  constructor(private ordentransporteService: OrdentransporteService, private router: Router) { }

  ngOnInit(): void {
    this.getOrdenList();
  }

  getOrdenList(){
    this.ordentransporteService.getOrdenTransporte().subscribe(
      res => {
        this.ordenList = res?.ordenResultList
      },
      err => console.log(err)
    );
  }

  delete(id: any){
    this.ordentransporteService.deletedOrdenTransporte(id).subscribe(
      res => this.getOrdenList(),
      err => console.log(err)
    )
  }

}

