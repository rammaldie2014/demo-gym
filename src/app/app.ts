import { Component, signal } from '@angular/core';
import { Home } from './features/home/home';
import { gym } from './core/config/gym';
import { ContactButton } from './shared/contact-button';
@Component({
  selector: 'app-root',
  imports: [ContactButton, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly gym = gym;
  readonly year = new Date().getFullYear();
  readonly open = signal(false);
  readonly links = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'planes', label: 'Planes' },
    { id: 'instalaciones', label: 'Instalaciones' },
    { id: 'contacto', label: 'Contacto' },
  ];
}
