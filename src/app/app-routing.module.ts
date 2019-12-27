import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminComponent } from './admin/admin.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { PasantiasComponent } from './visualizacion/pasantias/pasantias.component';
import { VisualizacionComponent } from './visualizacion/visualizacion.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro/:tipo', component: RegistroComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'pendientes/:tipo', component: PendientesComponent },
  { path: 'visualizacion/:tipo', component: VisualizacionComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
