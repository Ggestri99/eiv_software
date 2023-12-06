import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ListaVendedoresComponent } from './vendedores/lista-vendedores/lista-vendedores.component';
import { FormularioVendedorComponent } from './vendedores/formulario-vendedor/formulario-vendedor.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaVendedoresComponent,
    FormularioVendedorComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
