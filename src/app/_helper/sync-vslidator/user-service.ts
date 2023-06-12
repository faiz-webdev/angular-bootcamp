import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usernames = ['test@mail.com', 'test1@mail.com', 'test2@mail.com', 'test3@mail.com'];

  checkIfUsernameExists(value: string) {
    return of(this.usernames.some((a) => a.toLocaleUpperCase() === value.toLocaleUpperCase())).pipe(
      delay(1000)
    );
  }
}