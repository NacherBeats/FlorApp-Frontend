import { Rol } from './rol';

export interface Usuario {
  id?: number;
  nombre: string;
  apellido: string;
  email: string;
  contrasena?: string;
  rol: number | Rol;
  rol_nombre?: string;
}
