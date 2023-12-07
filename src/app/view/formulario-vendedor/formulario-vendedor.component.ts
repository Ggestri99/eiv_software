import { Component, DestroyRef, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { VendedorService } from '../../services/vendedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalidadService } from 'src/app/services/localidad.service';
import { Localidad } from '../../shared/models/localidades.models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-vendedor',
  templateUrl: './formulario-vendedor.component.html',
  styleUrls: ['./formulario-vendedor.component.scss'],
})
export class FormularioVendedorComponent implements OnInit {
  @Input({ transform: numberAttribute }) id!: number;
  #destroyRef = inject(DestroyRef)
  localidades: Localidad[] = [];
  myForm: FormGroup;
  selectedValue?: string;
  imageUrl: any = '';
  slideToggleValue: boolean = false;
  constructor(
    private vendedorService: VendedorService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private localidadService: LocalidadService,
    private snackBar: MatSnackBar

  ) {
    this.myForm = this.fb.group({
      fechaNacimiento: ['', [Validators.required, this.fechaNacimientoValidator.bind(this)]],
      habilitado: [false, Validators.required],
      localidadId: ['', Validators.required],
      nombre: ['', Validators.required],
      usuarioLogin: ['', Validators.required],
      observaciones: ['']
    });
    this.myForm.get('fechaNacimiento')?.setValidators([Validators.required, this.fechaNacimientoValidator.bind(this)]);
    this.localidadService.getAllLocalidades()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(localidades => {
        this.localidades = localidades
      })

  }

  ngOnInit() {
    if (this.id) {
      this.vendedorService.getVendedorById(this.id).subscribe(vendedor => {
        this.myForm.patchValue({
          fechaNacimiento: vendedor.fechaNacimiento,
          habilitado: vendedor.habilitado,
          localidadId: vendedor.localidad?.id,
          nombre: vendedor.nombre,
          usuarioLogin: vendedor.usuarioLogin,
          observaciones: vendedor.observaciones
        });
      });
    }
    if (this.id) {
      this.vendedorService.getFotoVendedor(this.id).subscribe(
        (data: any) => {
          const imageUrl = URL.createObjectURL(data);
          this.imageUrl = imageUrl;
        },
        (error) => {
          console.error('Error al obtener la foto del vendedor', error);
          // Maneja el error según sea necesario
        }
      );
    }

  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log(file)

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result;
        console.log(this.imageUrl)
      };
      console.log(reader.readAsDataURL(file))

      const idVendedor = this.id;

      if (idVendedor) {
        this.vendedorService.subirFotoVendedor(idVendedor, file)
          .subscribe(
            () => {
              console.log('Foto subida exitosamente');
              this.vendedorService.getFotoVendedor(idVendedor);
            },
            (error) => {
              console.error('Error al subir la foto', error);
            }
          );
      } else {
        console.error('ID de vendedor no válido');
      }
    }
  }


  onSlideToggleChange(event: any) {
    this.slideToggleValue = event.checked;
    this.myForm.get('habilitado')?.setValue(this.slideToggleValue)
  }

  private mostrarSnackbarCrear(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  private mostrarSnackbarEditar(mensaje:string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  editarFormulario() {
    const formData = this.myForm.value;
    const vendedorData = {
      usuarioLogin: formData.usuarioLogin,
      nombre: formData.nombre,
      habilitado: formData.habilitado,
      fechaNacimiento: formData.fechaNacimiento,
      observaciones: formData.observaciones,
      localidadId: formData.localidadId,
    };
    this.vendedorService.updateVendedor(this.id, vendedorData).subscribe(
      (response) => {
        this.mostrarSnackbarEditar('Vendedor Editado exitosamente');
        this.router.navigate(['/listado']);
      },
      (error) => {
        console.error('Error al Editar vendedor:', error);
      }
    );
  }

  enviarFormulario() {
    const formData = this.myForm.value;
    const vendedorData = {
      usuarioLogin: formData.usuarioLogin,
      nombre: formData.nombre,
      habilitado: formData.habilitado,
      fechaNacimiento: formData.fechaNacimiento,
      observaciones: formData.observaciones,
      localidadId: formData.localidadId,
    };

    this.vendedorService.addVendedor(vendedorData).subscribe(
      (response) => {
        this.mostrarSnackbarCrear('Vendedor creado exitosamente');
        this.router.navigate(['/listado']);
      },
      (error) => {
        console.error('Error al crear vendedor:', error);

      }
    );
  }

  fechaNacimientoValidator(control: any): { [key: string]: boolean } | null {
    const edadMin = 18;
    const edadMax = 65;
    if (control.value) {
      const fechaNacimiento = new Date(control.value);
      const edad = this.calcularEdad(fechaNacimiento);
      if (edad < edadMin || edad > edadMax) {
        return { 'rangoEdadInvalido': true };
      }
    }
    return null;
  }

  calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesHoy = hoy.getMonth();
    const mesNacimiento = nacimiento.getMonth();
    if (mesNacimiento > mesHoy || (mesNacimiento === mesHoy && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  setLocalidad(id: number | string) {
    console.log(id)
  }

}
