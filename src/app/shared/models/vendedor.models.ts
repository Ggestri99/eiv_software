interface Localidad {
    codigoPostal: string;
    id: number;
    localidad: string;
  }
  
  export interface Vendedor {
    fechaNacimiento: string;
    habilitado: boolean;
    id: number;
    localidad: Localidad;
    nombre: string;
    observaciones: string;
    usuarioLogin: string;
  }
  
 
  