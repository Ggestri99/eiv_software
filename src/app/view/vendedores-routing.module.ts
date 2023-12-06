import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioVendedorComponent } from './formulario-vendedor/formulario-vendedor.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeVendedoresComponent } from './home-vendedores/home-vendedores.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeVendedoresComponent },
      { path: 'formulario', component: FormularioVendedorComponent },
      { path: 'listado', component: ListaVendedoresComponent },
      { path: 'error', component: ErrorPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedoresRoutingModule { }
