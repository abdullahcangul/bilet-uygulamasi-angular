import { Component, OnInit } from '@angular/core';
import { Kupon } from '../../../entity/Kupon';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KuponService } from '../../../service/kupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kupon-update',
  templateUrl: './kupon-update.component.html',
  styleUrls: ['./kupon-update.component.scss']
})
export class KuponUpdateComponent implements OnInit {

  kupon:Kupon;
  AddForm:FormGroup
  id:number;

  constructor(  
    private router:Router,
    private service: KuponService,
    private formBuilder: FormBuilder,) { }

    updateForm(id:number) {
      
      this.AddForm = this.formBuilder.group(
        {
          id:[""],
       
      isim: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      email:["", [Validators.required,
        Validators.email]],

      url: ["", [Validators.required,
      Validators.maxLength(50),Validators.minLength(3)]],

      competnent: ["", [Validators.required,
      Validators.maxLength(20),Validators.minLength(3)]] ,

      password: ["", [Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)]],
        
      description: ["", [Validators.required,
        Validators.maxLength(500)]],

      });

      this.service.getById(id).subscribe(data=>{
        this.kupon=data;
        data.id=id;
        this.AddForm.setValue(data)
      });
     
    }

    ngOnInit() {
      //this.id = +this.route.snapshot.paramMap.get('id');
      let id = parseInt(localStorage.getItem("editkuponId"));
      console.log(id)
   
    if(!id) {
      alert("Geçersiz işlem.")
      this.router.navigate(['kupon']);
      return;
    }
    this.id=id;
     this.updateForm(id);
     
   }
 
   uptdate(){
     if(this.AddForm.valid){
       this.kupon = Object.assign({},this.AddForm.value)
       this.kupon.id=this.id;
       this.service.uptdate(this.kupon);
     }
   }
}
