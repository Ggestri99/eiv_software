import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListaVendedoresComponent } from 'src/app/view/lista-vendedores/lista-vendedores.component';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.components.html',
  styleUrls: ['./modal-alert.components.scss']
})
export class ModalAlertComponent {
  constructor(
    public dialogRef: MatDialogRef<ListaVendedoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data)
  }

  cerrarModal(eliminar: boolean): void {
    this.dialogRef.close(eliminar);
  }
  
}


