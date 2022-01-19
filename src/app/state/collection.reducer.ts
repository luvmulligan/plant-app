import { createReducer, on } from '@ngrx/store';
import { addPlant, removePlant } from './plants.actions';
 
export const initialState: Array<string> = [];
 
export const collectionReducer = createReducer(
  initialState,
  on(removePlant, (state, { groupId }) => state.filter((groupId) => groupId !== groupId)),
  on(addPlant, (state, { groupId }) => {
    if (state.indexOf(groupId) > -1) return state;
 
    return [...state, groupId];
  })
);