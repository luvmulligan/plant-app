import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Plant } from '../plant';
 
export const selectPlants = createFeatureSelector<any>('plants');
 
export const selectCollectionState = createFeatureSelector<
  any
>('collection');
 
export const selectPlantCollection = createSelector(
  selectPlants,
  selectCollectionState,
  (plants, collection) => {
    return collection.map((groupId: any) => plants.find((plant: any) => plant.groupId === groupId));
  }
);