import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  form: FormGroup;
  enviado = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviarConsulta() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const datos = {
      nombre: this.form.value.nombre,
      email: this.form.value.email,
      mensaje: this.form.value.mensaje,
    };

    this.http.post('https://florapp-backend-n9bz.onrender.com/api/interacciones/', datos).subscribe({
      next: () => {
        this.enviado = true;
        this.form.reset();
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Hubo un error al enviar tu consulta. Intentá de nuevo.');
      },
    });
  }
}
