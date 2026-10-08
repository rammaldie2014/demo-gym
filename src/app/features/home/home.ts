import { Component } from '@angular/core';
import { gym } from '../../core/config/gym';
import { ContactButton } from '../../shared/contact-button';
import { LocationMap } from '../../shared/location-map';
@Component({
  selector: 'app-home',
  imports: [ContactButton, LocationMap],
  templateUrl: './home.html',
})
export class Home {
  readonly gym = gym;
}
