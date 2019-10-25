import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiletAddComponent } from './bilet-add/bilet-add.component';
import { BiletSearchComponent } from './bilet-search/bilet-search.component';
import { BiletDetailComponent } from './bilet-detail/bilet-detail.component';
import { BiletRoutingModule } from './bilet-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [BiletAddComponent, BiletSearchComponent, BiletDetailComponent],
  imports: [
    CommonModule,
    BiletRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class BiletModule { }
