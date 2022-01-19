import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from '../plant';
 
@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss'],
})
export class PlantListComponent {
  @Input() plants: Plant[] = [];
  @Output() add = new EventEmitter<string>();
}