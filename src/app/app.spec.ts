import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { whatsappUrl } from './core/utils/whatsapp';
import { messages } from './core/config/gym';
describe('Gym landing', () => {
  it('renders sections and prices without fake contact links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('h1')?.textContent).toContain('TRANSFORMA');
    for (const id of [
      'inicio',
      'nosotros',
      'servicios',
      'planes',
      'instalaciones',
      'entrenador',
      'contacto',
    ])
      expect(root.querySelector('#' + id)).toBeTruthy();
    expect(root.querySelector('#planes')?.textContent).toContain('180');
    expect(root.querySelector('#planes')?.textContent).toContain('8');
    expect(root.querySelector('a[href*="wa.me"]')).toBeNull();
  });
  it('shows the demo notice without configured WhatsApp', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    (root.querySelector('app-contact-button button') as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(root.querySelector('[role="status"]')?.textContent).toContain('Demo: WhatsApp');
  });
  it('opens mobile navigation and closes it after selection', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    const toggle = root.querySelector('.menu-toggle') as HTMLButtonElement;
    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    (root.querySelector('#navigation a') as HTMLAnchorElement).click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
describe('WhatsApp', () => {
  it('rejects missing or invalid Peru numbers', () => {
    for (const phone of ['', '519999', '12345678901', '519123456789'])
      expect(whatsappUrl(phone, 'Hola')).toBeNull();
  });
  it('encodes all personalized messages', () => {
    for (const message of Object.values(messages)) {
      const url = whatsappUrl('+51 912 345 678', message);
      expect(url).toBe('https://wa.me/51912345678?text=' + encodeURIComponent(message));
      expect(new URL(url!).searchParams.get('text')).toBe(message);
    }
  });
});
