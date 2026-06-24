import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { PlantasServicio } from '../../services/plantas-servicio';


@Component({
  selector: 'app-galeriafichas',
  imports: [],
  standalone: true,
  templateUrl: './galeriafichas.html',
  styleUrls: ['./galeriafichas.css'],
})
export class Galeriafichas implements OnInit {
  private plantasServicio = inject(PlantasServicio);

  plantas = signal<any[]>([]);
  categorias = signal<any[]>([]);
  categoriaSeleccionadaId = signal<number | null>(null);

  plantasFiltradas = computed(() => {
    const filtroId = this.categoriaSeleccionadaId();
    const lista = this.plantas();
    if (filtroId === null) return lista;

    return lista.filter((p) => Number(p.categoria) === Number(filtroId));
  });

  ngOnInit(): void {
    this.cargarContenido();
  }

  cargarContenido(): void {
    this.plantasServicio.getPlantas().subscribe({
      next: (data) => {
        this.plantas.set(data.map((p) => ({ ...p, mostrar: false })));
      },
      error: (err) => console.error('Error al cargar plantas:', err),
    });

    this.plantasServicio.getCategorias().subscribe({
      next: (data) => this.categorias.set(data),
      error: (err) => console.error('Error al cargar categorías:', err),
    });
  }

  filtrarPorCategoria(id: number | null): void {
    this.categoriaSeleccionadaId.set(id);
  }

  obtenerNombreCategoria(categoriaId: any): string {
    if (!categoriaId) return '';
    const cat = this.categorias().find((c) => Number(c.id) === Number(categoriaId));
    return cat ? cat.categoria : '';
  }

  togglePlanta(plantaId: number): void {
    this.plantas.update((lista) =>
      lista.map((p) => (p.id === plantaId ? { ...p, mostrar: !p.mostrar } : p)),
    );
  }
}
