import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class AccessoireService {

  apiURL: string = 'http://localhost:8080/accessoire/api/all';


  accessoire! : Accessoire[]; //un tableau de accessoires
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listeAccessoire(): Observable<Accessoire[]>{
    return this.http.get<Accessoire[]>(this.apiURL);
    }

}
