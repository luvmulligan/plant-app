import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { StoreModule } from '@ngrx/store';
import { collectionReducer } from './state/collection.reducer';
import { plantsReducer } from './state/plants.reducer';
import { PlantCollectionComponent } from './plant-collection/plant-collection.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    PlantCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ plants: plantsReducer, collection: collectionReducer }),
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
