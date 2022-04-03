import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { SigninComponent } from "./components/signin/signin.component";
import { OrdenestransporteComponent } from './components/ordenestransporte/ordenestransporte.component';
import { NuevaOrdentransporteComponent } from './components/nueva-ordentransporte/nueva-ordentransporte.component';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'ordenes', component: OrdenestransporteComponent, canActivate: [AuthGuard]},
  {path: 'nuevaorden', component: NuevaOrdentransporteComponent, canActivate: [AuthGuard]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
