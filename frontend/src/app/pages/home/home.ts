import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Contact } from '../contact/contact';
import { QuienesSomos } from '../quienes-somos/quienes-somos';

@Component({
  selector: 'app-home',
  imports: [Header, Contact, QuienesSomos],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
