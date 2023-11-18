import { Component } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducer';
import { User } from '../../interfaces/user';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  faCircle = faCircle;
  $user!: Observable<User | null>;

  constructor(private store: Store<AppState>) {
    this.$user = this.store.select('user').pipe(map(user => user.user));
  }
  
}