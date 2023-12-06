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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { ObservacionesVendedoresComponent } from './lista-vendedores/components/observacion-vendedores.components';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    FormularioVendedorComponent,
    ListaVendedoresComponent,
    ErrorPageComponent,
    HomeVendedoresComponent,
    ObservacionesVendedoresComponent
  ],
  imports: [
    CommonModule,
    VendedoresRoutingModule,
    // Angular material
    // Angular material
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class VendedoresModule { }
