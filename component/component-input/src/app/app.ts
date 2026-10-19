import { Component } from '@angular/core';
import { UserProfile } from './user-profile/user-profile';

@Component({
  selector: 'app',
  template: `<user-profile name="Durgamahadev Parida" [profession]="'Angular/React'"></user-profile>`,
  styles: '',
  standalone: true,
  imports: [UserProfile],
})
export class AppComponent {}
