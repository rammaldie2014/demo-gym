import { Component, input, signal } from '@angular/core';
import { gym, messages, Inquiry } from '../core/config/gym';
import { whatsappUrl } from '../core/utils/whatsapp';
@Component({
  selector: 'app-contact-button',
  template: ` @if (url) {
      <a
        class="button"
        [class.secondary]="secondary()"
        [href]="url"
        target="_blank"
        rel="noopener noreferrer"
        >{{ label() }} <span aria-hidden="true">↗</span></a
      >
    } @else {
      <button class="button" [class.secondary]="secondary()" (click)="notice.set(true)">
        {{ label() }} <span aria-hidden="true">↗</span>
      </button>
    }
    @if (notice()) {
      <div class="demo-notice" role="status">
        Demo: WhatsApp estará disponible cuando el gimnasio configure su número.<button
          aria-label="Cerrar aviso"
          (click)="notice.set(false)"
        >
          ×
        </button>
      </div>
    }`,
})
export class ContactButton {
  label = input('Consultar por WhatsApp');
  inquiry = input<Inquiry>('general');
  secondary = input(false);
  notice = signal(false);
  get url() {
    return whatsappUrl(gym.whatsapp, messages[this.inquiry()]);
  }
}
