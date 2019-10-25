import { Injectable } from '@angular/core';
import { Koltuk } from '../entity/koltuk';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KoltukService {


  seferler:Koltuk[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:8080/api/sefer";

 
  
  gets(): Observable<Koltuk[]> {

    return this.httpClient.get<Koltuk[]>(this.path,);
  }
 
   
 
}
