import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VendedorService } from 'src/app/services/vendedor.service';
import { Vendedor } from 'src/app/shared/models/vendedor.models';
import { ObservacionesVendedoresComponent } from './components/observacion-vendedores.components';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-vendedores',
  templateUrl: './lista-vendedores.component.html',
  styleUrls: ['./lista-vendedores.component.scss']
})
export class ListaVendedoresComponent {
  vendedores:any
  constructor(
    private vendedorService:VendedorService,
    public dialog: MatDialog
  ) {
    this.vendedorService.getAllVendedores().subscribe(data=>{
      this.vendedores = data
    })
  }


  openDialog(obs:string,name:string) {
    const dialogRef = this.dialog.open(ObservacionesVendedoresComponent, {
      height: '200px',
      width: '400px',
      data: {
       obs:obs,
       name:name
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      result
    });

  }
}
