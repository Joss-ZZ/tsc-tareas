import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/interfaces/user';

export const setUser = createAction(
    '[Auth] setUser',
    props<{ user: User }>()
);

export const unSetUser = createAction('[Auth] unSetUser');