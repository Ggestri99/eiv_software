import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVendedoresComponent } from './vendedores/lista-vendedores/lista-vendedores.component';
import { FormularioVendedorComponent } from './vendedores/formulario-vendedor/formulario-vendedor.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'lista-vendedores', component: ListaVendedoresComponent },
  { path: 'editar-vendedor/:id', component: FormularioVendedorComponent },
  { path: '', redirectTo: '/lista-vendedores', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
