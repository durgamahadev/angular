import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {
  name = input.required<string>();
  userProfession = input('', {
    transform: (value: string) => value.toUpperCase(),
    alias:"profession"
  });
}
