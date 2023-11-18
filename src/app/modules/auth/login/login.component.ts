import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducer';
import { User } from 'src/app/shared/interfaces/user';
import * as authActions from 'src/app/modules/auth/state/actions/auth.actions';
import { AlertUtils } from 'src/app/shared/utils/alert-utils';

const user: User = {
  user: 'test01',
  password: 'test01',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = this.formBuilder.group({
    user: [user.user, [Validators.required]],
    password: [user.password, [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private router: Router) { }

  login() {
    if(!this.form.valid) return;

    const userInput: User = {
      user: this.form.get('user')?.value,
      password: this.form.get('password')?.value
    }

    if (!(userInput.user === user.user && userInput.password === user.password)) {
      return AlertUtils.showToast('error', 'Acceso Denegado', 'Usuario/Contraseña incorrectos')
    };

    this.store.dispatch( authActions.setUser({ user: userInput }) )

    localStorage.setItem('user', JSON.stringify(userInput));
    AlertUtils.showToast('success', '', `Bienvenido ${userInput.user}`)

    this.router.navigateByUrl('/tareas');
  }
}
