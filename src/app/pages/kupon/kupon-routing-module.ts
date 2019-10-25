  
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { KuponListComponent } from './kupon-list/kupon-list.component';
import { KuponAddComponent } from './kupon-add/kupon-add.component';
import { KuponUpdateComponent } from './kupon-update/kupon-update.component';

const routes: Routes = [
    {path: '', component:KuponListComponent },
    {path:'add',component:KuponAddComponent},
    {path:'update',component:KuponUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KuponRoutingModule { }