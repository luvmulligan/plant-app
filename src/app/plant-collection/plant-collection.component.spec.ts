import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCollectionComponent } from './plant-collection.component';

describe('PlantCollectionComponent', () => {
  let component: PlantCollectionComponent;
  let fixture: ComponentFixture<PlantCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
