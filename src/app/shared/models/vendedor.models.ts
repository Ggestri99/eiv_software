import { Localidad } from './localidades.models';

  export interface Vendedor {
    fechaNacimiento: string; 
    habilitado: boolean;
    id?: number;
    localidadId: number;
    localidad?:Localidad
    nombre: string; 
    observaciones: string;
    usuarioLogin: string; 
  }
  
  export interface GetVendedor extends Omit<Vendedor,'localidadId'> {
    localidad: Localidad
  }