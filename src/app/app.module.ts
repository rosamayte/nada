import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admin/admin.component';
import { RegistroComponent } from './registro/registro.component';
import { CarrerasComponent } from './admin/carreras/carreras.component';
import { AnunciosComponent } from './admin/anuncios/anuncios.component';
import { JefesComponent } from './admin/jefes/jefes.component';
import { EstudianteComponent } from './registro/estudiante/estudiante.component';
import { EmpresaComponent } from './registro/empresa/empresa.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { VisualizacionComponent } from './visualizacion/visualizacion.component';
import { EmpresasComponent } from './pendientes/empresas/empresas.component';
import { PasantesComponent } from './visualizacion/pasantes/pasantes.component';
import { PasantiasComponent } from './visualizacion/pasantias/pasantias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    AdminComponent,
    RegistroComponent,
    CarrerasComponent,
    AnunciosComponent,
    JefesComponent,
    EstudianteComponent,
    EmpresaComponent,
    PendientesComponent,
    VisualizacionComponent,
    EmpresasComponent,
    PasantesComponent,
    PasantiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
