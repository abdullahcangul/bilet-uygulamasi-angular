import { Component, OnInit } from '@angular/core';
import { Kupon } from '../../../entity/Kupon';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KuponService } from '../../../service/kupon.service';

@Component({
  selector: 'app-kupon-add',
  templateUrl: './kupon-add.component.html',
  styleUrls: ['./kupon-add.component.scss']
})
export class KuponAddComponent implements OnInit {


  kupon:Kupon;
  AddForm:FormGroup

  constructor(private service:KuponService,private formBuilder: FormBuilder) { }

  createCustomerForm() {
    this.AddForm = this.formBuilder.group({

      isim: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      email:["", [Validators.required,
        Validators.email]],

      url: ["", [Validators.required,
      Validators.maxLength(50),Validators.minLength(3)]],

      competnent: ["", [Validators.required,
      Validators.maxLength(20),Validators.minLength(3)]] ,

      description: ["", [Validators.required,
        Validators.maxLength(500)]],

      password: ["", [Validators.required,
          Validators.maxLength(15),
          Validators.minLength(3)]],

    });
  }
  ngOnInit() {
    this.createCustomerForm();
  }

  add(){
    if(this.AddForm.valid){
      this.kupon = Object.assign({},this.AddForm.value)
      this.service.add(this.kupon)
    }
  }
}
