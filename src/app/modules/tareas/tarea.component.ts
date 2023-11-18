import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Tarea } from './state/models/tarea';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as tareasActions from 'src/app/modules/tareas/state/actions/tarea.action';
import { selectMaxTareaId } from './state/selectors/tarea.selector';
import { AlertUtils } from 'src/app/shared/utils/alert-utils';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  providers: []
})
export class TareaComponent {

  faXmark = faXmark;

  listaTareas!: Tarea[];
  maxId: number = 0;

  form!: FormGroup;

  constructor(private store: Store<AppState>, private _fb: FormBuilder) {

    this.store.select('tareas').subscribe(tarea => {
      this.listaTareas = tarea.tareas;
      localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    })
    this.store.pipe(select(selectMaxTareaId)).subscribe(id => {
      this.maxId = id;
    })
  }

  ngOnInit() {
    this.form = this._fb.group({
      tarea: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/)]]
    })
  }

  agregarTarea(event: Event) {
    event.preventDefault();
    console.log(this.form.get('tarea')?.value)
    const tareaControl = this.form.get('tarea');
    if (this.form.invalid || tareaControl?.value.trim() === '') return AlertUtils.showToast('warning', 'Advertencia', 'El campo es requerido y solo admite valores alfanuméricos')
    
    const nuevaTarea: Tarea = {
      id: this.maxId + 1,
      name: this.form.get('tarea')?.value,
      completed: false
    }

    this.store.dispatch( tareasActions.crearTarea({ tarea: nuevaTarea }) )

    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));

    this.form.reset();
  }

  toggle(tarea: Tarea) {
    this.store.dispatch( tareasActions.toogle({ id: tarea.id!}) )

    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }

  eliminarTarea(tarea: Tarea) {
    this.store.dispatch( tareasActions.eliminarTarea({ id: tarea.id!}) )

    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }
}