import { Component } from '@angular/core';
import { VendedorService } from '../../services/vendedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalidadService } from 'src/app/services/localidad.service';
import { Localidad } from '../../shared/models/localidades.models';

@Component({
  selector: 'app-formulario-vendedor',
  templateUrl: './formulario-vendedor.component.html',
  styleUrls: ['./formulario-vendedor.component.scss'],

})
export class FormularioVendedorComponent {
  localidades: Localidad[] = [];
  myForm: FormGroup;
  selectedValue?: string;
  imageUrl: any = '';
  slideToggleValue: boolean = false;

  constructor(
    private vendedorService: VendedorService,
    private fb: FormBuilder,
    private router: Router,
    private localidadService: LocalidadService

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
    this.localidadService.getAllLocalidades().subscribe(localidades => {
      this.localidades = localidades
    })
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSlideToggleChange(event: any) {
    this.slideToggleValue = event.checked;
    this.myForm.get('habilitado')?.setValue(this.slideToggleValue)
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
        console.log('Vendedor creado exitosamente:', response);
        // this.router.navigate(['/listado']);
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

}
