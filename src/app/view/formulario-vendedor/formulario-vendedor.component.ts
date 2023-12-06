import { Component } from '@angular/core';
import { VendedorService } from '../../services/vendedor.service';

@Component({
  selector: 'app-formulario-vendedor',
  templateUrl: './formulario-vendedor.component.html',
  styleUrls: ['./formulario-vendedor.component.scss']
})
export class FormularioVendedorComponent {

  constructor(
    private vendedorService:VendedorService
  ) {
   this.vendedorService.getAllVendedores().subscribe((data)=>{
    console.log('vendores', data)
   })
  }
}
