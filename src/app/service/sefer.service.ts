import { Injectable } from '@angular/core';
import { SeferResponse } from '../entity/SeferResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeferService {

  sefer:SeferResponse;
  seferler:SeferResponse[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:8080/api/sefer";

 
  
  gets(): Observable<SeferResponse[]> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", localStorage.getItem("token"))

    return this.httpClient.get<SeferResponse[]>(this.path,{ headers: headers });
  }
  getById(id):Observable<SeferResponse>{
   
      return this.httpClient.get<SeferResponse>(this.path+"/"+id)
  }
  
 /* activateEmployee(id:number):Observable<Boolean>{
    return this.httpClient.get<Boolean>(this.path+"/AktifEt/"+id)
  }*/
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
