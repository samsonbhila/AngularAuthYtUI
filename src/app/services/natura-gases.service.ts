import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { natural } from '../models/natural.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NaturaGasesService {
baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  getAllNaturalGases(): Observable<natural[]>{
    return this.http.get<natural[]>(this.baseApiUrl + '/api/NaturalGases');

    
  }

  
}
