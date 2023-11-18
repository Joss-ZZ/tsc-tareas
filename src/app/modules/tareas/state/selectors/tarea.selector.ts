import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/tarea.reducer';

export const selectTareaState = createFeatureSelector<State>('tareas');

export const selectTareas = createSelector(
  selectTareaState,
  (state: State) => state.tareas
);

export const selectMaxTareaId = createSelector(selectTareas, (tareas) => {
  if (tareas.length === 0) {
    return 0;
  } else {
    const maxId = tareas.reduce(
      (max, tarea) => (tarea.id && tarea.id > max ? tarea.id : max),
      0
    );
    return maxId || 0;
  }
});
