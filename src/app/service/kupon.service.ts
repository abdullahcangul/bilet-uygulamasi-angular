import { Injectable } from '@angular/core';
import { Kupon } from '../entity/Kupon';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class KuponService {
  kupon:Kupon;
  kuponlar:Kupon[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:58371/api/kupon";

 
  
  gets(): Observable<Kupon[]> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", localStorage.getItem("token"))

    return this.httpClient.get<Kupon[]>(this.path,{ headers: headers });
  }
  getById(id):Observable<Kupon>{
   
      return this.httpClient.get<Kupon>(this.path+"/"+id)
  }
  
 /* activateEmployee(id:number):Observable<Boolean>{
    return this.httpClient.get<Boolean>(this.path+"/AktifEt/"+id)
  }*/
  add(kupon){
    this.httpClient.post(this.path ,kupon).subscribe((data)=>{
      this.router.navigateByUrl('kupon')
      this.alertifyService.success(kupon.isim+" Eklendi");
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
