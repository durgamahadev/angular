import { bootstrapApplication } from '@angular/platform-browser';
import { UserProfile } from './app/user-profile/user-profile';

bootstrapApplication(UserProfile)
  .catch((err) => console.error(err));
