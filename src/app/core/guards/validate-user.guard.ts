import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserGuard implements CanActivate {

  constructor(private store: Store<AppState>,
              private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select('user').pipe(
      map(user => {
        if (!user.user) {
          this.router.navigateByUrl('/auth');
          return false;
        } else {
          return true;
        }
      }),
      take(1)
    );
  }
  
}