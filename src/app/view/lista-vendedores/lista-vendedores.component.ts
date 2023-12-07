import { Component } from '@angular/core';
import { VendedorService } from 'src/app/services/vendedor.service';
import { GetVendedor, Vendedor } from 'src/app/shared/models/vendedor.models';
import { ObservacionesVendedoresComponent } from './components/observacion-vendedores.components';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.components';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-vendedores',
  templateUrl: './lista-vendedores.component.html',
  styleUrls: ['./lista-vendedores.component.scss']
})
export class ListaVendedoresComponent {
  vendedores: Vendedor[] = []

  constructor(
    private router: Router,
    private vendedorService: VendedorService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.actualizarListaVendedores();
  }

  private actualizarListaVendedores() {
    this.vendedorService.getAllVendedores().subscribe(data => {
      this.vendedores = data;
    });
  }

  openDialog(obs: string, name: string) {
    const dialogRef = this.dialog.open(ObservacionesVendedoresComponent, {
      height: '200px',
      width: '400px',
      data: {
        obs: obs,
        name: name
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      result;
    });
  }

  redirectToEditPage(vendedor: Vendedor) {
    this.router.navigate(['/formulario', vendedor.id]);
  }
  
  delete(vendedor: Vendedor) {
    const dialogRef = this.dialog.open(ModalAlertComponent, {
      height: '200px',
      width: '380px',
      data: {
        nombre: vendedor.nombre,
        id: vendedor.id
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const id = vendedor.id!
        this.vendedorService.deleteVendedor(id).subscribe(() => {
          const mensaje = 'Vendedor eliminado'
          this.mostrarSnackbarBorrar(mensaje)
          this.actualizarListaVendedores();
        });
      } else {
        console.log('No se ejecutó', result);
      }
    });
  }

  private mostrarSnackbarBorrar(mensaje:string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 2500,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
