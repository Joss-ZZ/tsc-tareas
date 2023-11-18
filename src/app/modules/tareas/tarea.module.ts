import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { TareaComponent } from './tarea.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
		path: '',
		component: TareaComponent
	}
];

@NgModule({
  declarations: [
    TareaComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MenuModule,
    FontAwesomeModule
  ]
})
export class TareaModule { }
