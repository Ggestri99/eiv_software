import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-observaciones-vendedores',
  templateUrl: './observacion-vendedores.components.html',
  styleUrls: ['./observacion-vendedores.components.scss']
})
export class ObservacionesVendedoresComponent {
  constructor(
    public dialogRef: MatDialogRef<ObservacionesVendedoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  cerrarModal(): void {
    this.dialogRef.close();

  }
}


