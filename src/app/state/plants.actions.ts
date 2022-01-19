import { createAction, props } from '@ngrx/store';
import { Plant } from '../plant';
 
export const retrievedPlantList = createAction(
  '[Plant List/API] Retrieve Plants Success',
  props<{ plants: Plant[] }>()
);

export const removePlant = createAction(
    '[Plant Collection] Remove Plant',
    props<{ groupId: string }>()
  );
   
  export const addPlant = createAction(
    '[Plant List] Add Plant',
    props<{ groupId: string }>()
  );