/* tslint:disable */
import { Action } from '@ngrx/store';

export interface appState {
 estado: string
}

export const initialState = { estado: 'purple-bank' }

export function reducer(state: appState = initialState, action: Action) {
 switch (action.type) {
  case 'changeViewOthers':
   return {
    ...state,
    estado: 'other-banks'
   }
   case 'changeViewPurple':
   return {
    ...state,
    estado: 'purple-bank'
    
   }
 }

 return state;
}