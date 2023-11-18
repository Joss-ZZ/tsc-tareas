import { Action, createReducer, on } from '@ngrx/store';
import { crearTarea, crearTareas, eliminarTarea, toogle } from '../actions/tarea.action';
import { Tarea } from '../models/tarea';

export interface State {
  tareas: Tarea[];
}

const storedTareas = localStorage.getItem('tareas');

export const initialState: State = {
  tareas: storedTareas ? JSON.parse(storedTareas) : [
    {
      id: 1,
      name: 'Salir a comprar el pan a las 7 am',
      completed: true,
    },
    {
      id: 2,
      name: 'Hacer ejercicio a las 8 am',
      completed: false,
    },
    {
      id: 3,
      name: 'Sacar a pasear al perro',
      completed: true,
    },
    {
      id: 4,
      name: 'Hacer code review de mi equipo de trabajo',
      completed: false,
    },
    {
      id: 5,
      name: 'Reunión con el cliente a las 4 pm',
      completed: false,
    },
  ],
};

const _tareaReducer = createReducer(
  initialState,

  on(crearTarea, (state, { tarea }) => ({
    ...state,
    tareas: [...state.tareas, tarea],
  })),
  on(crearTareas, (state, { tareas }) => {
    const existingIds = state.tareas.map(tarea => tarea.id);
    const newTareas = tareas.filter(tarea => !existingIds.includes(tarea.id));
    return {
      ...state,
      tareas: [...state.tareas, ...newTareas],
    };
  }),
  on(eliminarTarea, (state, { id }) => ({
    ...state,
    tareas: state.tareas.filter((tarea) => tarea.id !== id),
  })),
  on(toogle, (state, { id }) => ({
    ...state,
    tareas: state.tareas.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completed: !tarea.completed,
        };
      } else {
        return tarea;
      }
    }),
  }))
);

export function tareaReducer(state: State | undefined, action: Action) {
  return _tareaReducer(state, action);
}
