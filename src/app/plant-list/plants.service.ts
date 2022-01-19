import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Plant } from '../plant';
import { plantsReducer } from '../state/plants.reducer';

 
@Injectable({ providedIn: 'root' })
export class GooglePlantsService {
  private url = "http://localhost:3000/plants";

  constructor(private http: HttpClient) {}
 
  getPlants(): Observable<any> {
    return this.http
      .get<any>(this.url)
      .pipe(map((plants) => plants));

      
      
  }
  getPlant(groupId: string): Observable<Plant> {
      return this.http.get<Plant>(this.url)
  }
}