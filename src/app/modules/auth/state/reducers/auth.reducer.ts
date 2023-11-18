import { User } from 'src/app/shared/interfaces/user';
import { setUser, unSetUser } from '../actions/auth.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface State {
    user: User | null; 
}

export const initialState: State = {
   user: null,
}

const _authReducer = createReducer(initialState,

    on( setUser, (state, { user }) => ({ ...state, user: { ...user }  })),
    on( unSetUser, state => ({ ...state, user: null  })),

);

export function authReducer(state: State | undefined, action: Action) {
    return _authReducer(state, action);
}