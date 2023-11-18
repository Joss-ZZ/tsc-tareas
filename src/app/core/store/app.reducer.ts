import { ActionReducerMap } from '@ngrx/store';
import * as tareas from 'src/app/modules/tareas/state/reducers/tarea.reducer';
import * as auth from 'src/app/modules/auth/state/reducers/auth.reducer';


export interface AppState {
   tareas: tareas.State,
   user: auth.State
}

export const appReducers: ActionReducerMap<AppState> = {
   tareas: tareas.tareaReducer,
   user: auth.authReducer
}