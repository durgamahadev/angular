import { bootstrapApplication } from '@angular/platform-browser';
import { UserProfile } from './app/user-profile/user-profile';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
