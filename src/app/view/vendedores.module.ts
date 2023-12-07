import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioVendedorComponent } from './formulario-vendedor/formulario-vendedor.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { VendedoresRoutingModule } from './vendedores-routing.module';
import { HomeVendedoresComponent } from './home-vendedores/home-vendedores.component';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ObservacionesVendedoresComponent } from './lista-vendedores/components/observacion-vendedores.components';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



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
    ReactiveFormsModule,
    FormsModule,
    // Angular material
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule

  ]
})
export class VendedoresModule { }
