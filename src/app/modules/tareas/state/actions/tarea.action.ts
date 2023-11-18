import { createAction, props } from '@ngrx/store';
import { Tarea } from '../models/tarea';

export const crearTarea = createAction(
    '[Tarea] Crear Tarea',
    props<{ tarea: Tarea }>()
);

export const crearTareas = createAction(
    '[Tarea] Crear Tareas',
    props<{ tareas: Tarea[] }>()
);

export const eliminarTarea = createAction(
    '[Tarea] Eliminar Tarea',
    props<{ id: number }>()
);

export const toogle = createAction(
    '[Tarea] Toogle Tarea',
    props<{ id: number }>()
);