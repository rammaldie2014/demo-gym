import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { gym } from '../core/config/gym';
@Component({
  selector: 'app-location-map',
  template: `@if (url) {
      <iframe
        [src]="url"
        title="Ubicación del gimnasio en Google Maps"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    } @else {
      <div class="map-placeholder">
        <span class="map-pin" aria-hidden="true">⌖</span>
        <h3>Pronto, más cerca de ti.</h3>
        <p>Mapa pendiente de la ubicación real</p>
        <span class="demo-tag">DEMO · UBICACIÓN POR CONFIGURAR</span>
      </div>
    }`,
})
export class LocationMap {
  private readonly sanitizer = inject(DomSanitizer);
  readonly url = /^https:\/\/(www\.)?google\.com\/maps\/embed(?:[/?])/.test(gym.mapEmbedUrl)
    ? this.sanitizer.bypassSecurityTrustResourceUrl(gym.mapEmbedUrl)
    : null;
}
