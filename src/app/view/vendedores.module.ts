import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioVendedorComponent } from './formulario-vendedor/formulario-vendedor.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { VendedoresRoutingModule } from './vendedores-routing.module';
import { HomeVendedoresComponent } from './home-vendedores/home-vendedores.component';


@NgModule({
  declarations: [
    FormularioVendedorComponent,
    ListaVendedoresComponent,
    ErrorPageComponent,
    HomeVendedoresComponent
  ],
  imports: [
    CommonModule,
    VendedoresRoutingModule
  ]
})
export class VendedoresModule { }
