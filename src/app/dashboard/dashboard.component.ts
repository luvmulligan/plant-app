import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GooglePlantsService } from '../plant-list/plants.service';
import { addPlant, removePlant, retrievedPlantList } from '../state/plants.actions';
import { selectPlantCollection, selectPlants } from '../state/plants.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  plants$ = this.store.select(selectPlants);
  plantCollection$ = this.store.select(selectPlantCollection);

  constructor(
    private plantsService: GooglePlantsService,
    private store: Store
  ) {}

  ngOnInit() {
    this.plantsService
      .getPlants()
      .subscribe((plants) => this.store.dispatch(retrievedPlantList({ plants })));
  }
  onAdd(groupId: string) {
    this.store.dispatch(addPlant({ groupId }));
  }
  onRemove(groupId: string) {
    this.store.dispatch(removePlant({ groupId }));
  }
}
