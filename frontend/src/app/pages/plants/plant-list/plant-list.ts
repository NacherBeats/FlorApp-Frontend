import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PlantasServicio } from '../../../services/plantas-servicio';


@Component({
  selector: 'app-plant-list',
  imports: [RouterModule],
  templateUrl: './plant-list.html',
  styleUrl: './plant-list.css',
})
export class PlantList implements OnInit {
  private plantasServicio = inject(PlantasServicio);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  plantas: any[] = [];

  ngOnInit(): void {
    this.loadPlantas();
  }

  private loadPlantas(): void {
    this.plantasServicio.getPlantas().subscribe({
      next: (data) => {
        console.log('Plantas recibidas desde la API:', data);
        this.plantas = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar las plantas:', err);
        alert('Error al cargar las plantas.');
      },
    });
  }

  eliminarPlanta(id: number): void {
    if (confirm('¿Deseas eliminar esta especie del catálogo?')) {
      this.plantasServicio.eliminarPlanta(id).subscribe({
        next: () => this.loadPlantas(),
        error: () => alert('Error: No se pudo eliminar la planta.'),
      });
    }
  }

  get esDocente(): boolean {
    return this.router.url.includes('/docentes');
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
