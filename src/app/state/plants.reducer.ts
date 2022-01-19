import { createReducer, on } from '@ngrx/store';
import { Plant } from '../plant';
import { retrievedPlantList } from './plants.actions';

export const initialState: Plant[] = [];

export const plantsReducer = createReducer(
  initialState,
  on(retrievedPlantList, (state, { plants }) => plants)
);