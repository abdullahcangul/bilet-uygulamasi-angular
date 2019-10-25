import { Component, OnInit } from '@angular/core';
import { Kupon } from '../../../entity/Kupon';
import { Router } from '@angular/router';
import { AlertifyService } from '../../../service/alertify.service';
import { KuponService } from '../../../service/kupon.service';

@Component({
  selector: 'app-kupon-list',
  templateUrl: './kupon-list.component.html',
  styleUrls: ['./kupon-list.component.scss']
})
export class KuponListComponent implements OnInit {

  selected: Kupon;
  kuponlar:Kupon[];

  
  constructor(private router: Router,
    private service:KuponService,
    private alertifyService:AlertifyService) { }

  ngOnInit() {
    this.gets();
  }

  gets(){
    this.service.gets().subscribe(data => {
      this.kuponlar = data;
    });
  }


  onSelect(kupon: Kupon): void {
    this.selected = kupon;
  }

  onDelete(kupon: Kupon): void {
    if(!confirm('Silmek istediğinizden emin misiniz ?')){
      return
    }
    this.service.delete(kupon.id).subscribe(data=>{
        this.gets();
        this.alertifyService.success(kupon.isim+" Silindi");
    },(err)=>{
        this.alertifyService.error(" Hata olustu");
    });
    
  }

  onUptdate(kupon):void{
    localStorage.removeItem("editkuponId");
    localStorage.setItem("editkuponId", kupon.id.toString());
    this.router.navigate(['kupon/uptdate']);
  }

  onDetail(kupon):void{
    localStorage.removeItem("detailkuponrId");
    localStorage.setItem("detailkuponId", kupon.id.toString());
    this.router.navigate(['kupon/detail']);
  }
}
