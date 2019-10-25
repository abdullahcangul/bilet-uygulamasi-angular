  
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { BiletAddComponent } from './bilet-add/bilet-add.component';
import { BiletDetailComponent } from './bilet-detail/bilet-detail.component';
import { BiletSearchComponent } from './bilet-search/bilet-search.component';

const routes: Routes = [
    {path:'',component:BiletAddComponent},
    {path: 'detay', component:BiletDetailComponent },
    {path:'update',component:BiletSearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiletRoutingModule { }