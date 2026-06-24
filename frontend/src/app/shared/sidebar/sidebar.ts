import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactoService } from '../../services/contacto';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  private contactoService = inject(ContactoService);

  mensajes = signal<any[]>([]);

  noLeidos = computed(() => this.mensajes().filter(m => !m.leido).length);

  ngOnInit() {
    this.contactoService.getMensajes().subscribe({
      next: (data) => this.mensajes.set(data),
      error: (err) => console.error('Error al cargar mensajes:', err)
    });
  }
}