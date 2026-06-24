import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlantasServicio } from '../../../services/plantas-servicio';
import { Especie } from '../../../interfaces/especie';

@Component({
  selector: 'app-docente-dashboard',
  imports: [RouterModule],
  templateUrl: './docente-dashboard.html',
  styleUrl: './docente-dashboard.css',
})
export class DocenteDashboard implements OnInit {
  private plantasService = inject(PlantasServicio);
  private cdr = inject(ChangeDetectorRef);

  misPlantas: Especie[] = [];

  ngOnInit() {
    const userSession = localStorage.getItem('user');
    let usuarioId: number | null = null;

    if (userSession) {
      const user = JSON.parse(userSession);
      usuarioId = Number(user.id);
    }

    if (usuarioId) {
      this.cargarMisPlantas(usuarioId);
    } else {
      console.error('No se encontró ningún usuario logueado en la sesión.');
    }
  }

  cargarMisPlantas(usuarioId: number) {
    this.plantasService.getMisPlantas(usuarioId).subscribe({
      next: (data: Especie[]) => {
        this.misPlantas = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error al cargar', err),
    });
  }

  eliminarFicha(id: number | undefined) {
    if (id && confirm('¿Estás seguro de que deseas eliminar esta ficha?')) {
      this.plantasService.eliminarPlanta(id).subscribe({
        next: () => {
          this.misPlantas = this.misPlantas.filter((p) => p.id !== id);
          this.cdr.detectChanges(); // 👈 fuerza la actualización de la vista
          alert('Ficha eliminada correctamente');
        },
        error: (err) => {
          console.error('Error al eliminar', err);
          alert('No se pudo eliminar la ficha');
        },
      });
    }
  }
}