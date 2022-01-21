import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GooglePlantsService } from './plant-list/plants.service';
import { addPlant, removePlant, retrievedPlantList } from './state/plants.actions';
import { selectPlantCollection, selectPlants } from './state/plants.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Plant Starter';
}
