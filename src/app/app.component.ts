import { Component } from '@angular/core';
import { AppState } from './core/store/app.reducer';
import { Store } from '@ngrx/store';
import * as authActions from 'src/app/modules/auth/state/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcs-angular';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.store.dispatch(authActions.setUser({ user }));
    }
  }
}
