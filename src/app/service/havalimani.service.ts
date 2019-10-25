import { Injectable } from '@angular/core';
import { SeferResponse } from '../entity/SeferResponse';
import { Havalimani } from '../entity/Havalimani';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HavalimaniService {


  havalimani:Havalimani;
  havalimanlari:Havalimani[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:8080/api/havalimani";

 
  
  gets(): Observable<Havalimani[]> {
	console.log(this.httpClient.get<Havalimani[]>(this.path))
    return this.httpClient.get<Havalimani[]>(this.path);
  }
  getById(id):Observable<SeferResponse>{
   
      return this.httpClient.get<SeferResponse>(this.path+"/"+id)
  }
  
  add(sefer){
    this.httpClient.post(this.path ,sefer).subscribe((data)=>{
      this.router.navigateByUrl('kupon')
      this.alertifyService.success(sefer.isim+" Eklendi");
    },(err)=>{
      this.alertifyService.error(err);
    }
    );
  }

  seach(sefer):any{
    this.httpClient.post(this.path ,sefer).subscribe((data)=>{
     // this.router.navigateByUrl('kupon')
      this.alertifyService.success(sefer.isim+" Eklendi");
      return data;
    },(err)=>{
      this.alertifyService.error(err);
    }
    );
  }

  uptdate(kupon){
    this.httpClient.put(this.path,kupon).subscribe(data=>{
     // this.router.navigateByUrl('customer/detail/'+data["ID"])
     this.router.navigateByUrl('kupon');
     this.alertifyService.success(kupon.isim+" Güncellendi");
    },(err)=>{
      this.alertifyService.error(err);
    });
  }
   
  delete(id):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.path + "/"+id);
  }
}
