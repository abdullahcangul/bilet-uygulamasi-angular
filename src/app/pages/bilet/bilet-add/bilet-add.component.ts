import { Component, OnInit } from '@angular/core';
import { Havalimani } from '../../../entity/Havalimani';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SeferRequest } from '../../../entity/SeferRequest';
import { SeferService } from '../../../service/sefer.service';
import { SeferResponse } from '../../../entity/SeferResponse';
import { HavalimaniService } from '../../../service/havalimani.service';
import { Koltuk } from '../../../entity/koltuk';
import { Bilet } from '../../../entity/Bilet';

@Component({
  selector: 'app-bilet-add',
  templateUrl: './bilet-add.component.html',
  styleUrls: ['./bilet-add.component.scss']
})
export class BiletAddComponent implements OnInit {

  seferRequest:SeferRequest;
  seciliKoltuk:Koltuk;
  doluKoltuklar:Koltuk[];
  doluKoltuklar2:Koltuk[];
  koltuklar:Koltuk[]=[
    {isim:"1a",koltukUcreti:500,sinif:"business"},
    {isim:"1b",koltukUcreti:500,sinif:"business"},
    {isim:"1c",koltukUcreti:500,sinif:"business"},
    {isim:"1d",koltukUcreti:500,sinif:"business"},
    {isim:"1e",koltukUcreti:500,sinif:"business"},
    {isim:"1f",koltukUcreti:500,sinif:"business"},
    {isim:"2a",koltukUcreti:100,sinif:"normal"},
    {isim:"2b",koltukUcreti:100,sinif:"normal"},
    {isim:"2c",koltukUcreti:100,sinif:"normal"},
    {isim:"2d",koltukUcreti:100,sinif:"normal"},
    {isim:"2e",koltukUcreti:100,sinif:"normal"},
    {isim:"2f",koltukUcreti:100,sinif:"normal"},
  ];
  seferResponses:SeferResponse[];
  havalimanlari:Havalimani[];
  seciliSefer:SeferRequest;
  checkoutForm:FormGroup;

  constructor(
    private service:SeferService,
    private havalimaniService:HavalimaniService ,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {

    this.getHavalimanlari();
    
    this.checkoutForm = this.formBuilder.group({
   
      'inishavalimaniId':  ["", Validators.required],
      'kalkisHavalimaniId': ["", Validators.required],
      'gidiskalkisZamani': ["", Validators.required],
      'donuskalkisZamani': ["", ],
    });
  }

  getHavalimanlari(){
    this.havalimaniService.gets().subscribe(data=>{
      this.havalimanlari=data;
  })
  }



  onSubmit() {   
    this.seferRequest = Object.assign({},this.checkoutForm.value)
    console.log( this.seferRequest)
    this.seferResponses=this.service.seach(this.seferRequest)
  }
  seferSec(sefer){
    this.seciliSefer= sefer;
    this.doluKoltuklar=sefer.koltuklar;

  }

  koltukSec(koltuk){
    this.seciliSefer= koltuk;
  }

  biletAl(){
    let bilet={
      seferId:this.seciliSefer.id,
      koltukId:this.seciliKoltuk.id,
      musteriId:1
    }
   
  }
}
