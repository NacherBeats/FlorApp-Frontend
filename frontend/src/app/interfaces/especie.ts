export interface Especie {
    id?: number;
    nombre_comun: string;
    nombre_cientifico: string;
    descripcion: string;
    categoria: number;
    categoria_detalle?: {
        id: number;
        categoria: string;
        descripcion: string;
    };
    usuario: number;
    imagenes: { url: string }[];
}
