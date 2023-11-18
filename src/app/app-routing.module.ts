import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateUserGuard } from './core/guards/validate-user.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'tareas',
    loadChildren: ()=> import('./modules/tareas/tarea.module').then(m=>m.TareaModule),
    canActivate: [ValidateUserGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }