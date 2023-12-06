import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioVendedorComponent } from './formulario-vendedor/formulario-vendedor.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { VendedoresRoutingModule } from './vendedores-routing.module';
import { HomeVendedoresComponent } from './home-vendedores/home-vendedores.component';

// Material
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    FormularioVendedorComponent,
    ListaVendedoresComponent,
    ErrorPageComponent,
    HomeVendedoresComponent,
  ],
  imports: [
    CommonModule,
    VendedoresRoutingModule,
    // Angular material
    // Angular material
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class VendedoresModule { }
