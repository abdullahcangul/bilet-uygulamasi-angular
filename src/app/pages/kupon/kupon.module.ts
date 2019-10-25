import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KuponAddComponent } from './kupon-add/kupon-add.component';
import { KuponUpdateComponent } from './kupon-update/kupon-update.component';
import { KuponListComponent } from './kupon-list/kupon-list.component';
import { KuponRoutingModule } from './kupon-routing-module';



@NgModule({
  declarations: [ KuponAddComponent, KuponUpdateComponent, KuponListComponent],
  imports: [
    CommonModule,
    KuponRoutingModule
  ]
})
export class KuponModule { }
