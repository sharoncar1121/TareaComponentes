export interface Usuario {
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    fechaNacimiento: Date | null;
    edad: number;
  }
  
export interface InfoUsuarioLista {
    usuarios: Usuario[];
  }