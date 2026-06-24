import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ContactoService} from '../../services/contacto';
import { Contacto } from '../../interfaces/contacto';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mensajes-lista',
  imports: [DatePipe],
  templateUrl: './mensajes-lista.html',
  styleUrl: './mensajes-lista.css',
})
export class MensajesLista implements OnInit {
  private contactoService = inject(ContactoService);

  mensajes = signal<Contacto[]>([]);
  filtro = signal<'todos' | 'leidos' | 'respondidos'>('todos');

  mensajesFiltrados = computed(() => {
    const lista = this.mensajes();
    const f = this.filtro();
    if (f === 'leidos') return lista.filter(m => m.leido);
    if (f === 'respondidos') return lista.filter(m => m.respondido);
    return lista;
  });

  noLeidos = computed(() => this.mensajes().filter(m => !m.leido).length);

  ngOnInit() {
    this.cargarMensajes();
  }

  cargarMensajes() {
    this.contactoService.getMensajes().subscribe({
      next: (data) => this.mensajes.set(data),
      error: (err) => console.error('Error al cargar mensajes:', err)
    });
  }

  marcarLeido(id: number) {
    this.contactoService.marcarLeido(id).subscribe({
      next: (actualizado) => {
        this.mensajes.update(lista =>
          lista.map(m => m.id === id ? actualizado : m)
        );
      }
    });
  }

  marcarRespondido(id: number) {
    this.contactoService.marcarRespondido(id).subscribe({
      next: (actualizado) => {
        this.mensajes.update(lista =>
          lista.map(m => m.id === id ? actualizado : m)
        );
      }
    });
  }

  setFiltro(f: 'todos' | 'leidos' | 'respondidos') {
    this.filtro.set(f);
  }
}