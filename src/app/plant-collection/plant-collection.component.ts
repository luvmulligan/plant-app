import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from '../plant';
 
@Component({
  selector: 'app-plant-collection',
  templateUrl: './plant-collection.component.html',
  styleUrls: ['./plant-collection.component.scss'],
})
export class PlantCollectionComponent {
  @Input() plants: Plant[] = [];
  @Output() remove = new EventEmitter<string>();
}