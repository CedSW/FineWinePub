import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeveragesPage } from './beverages';

@NgModule({
  declarations: [
    BeveragesPage,
  ],
  imports: [
    IonicPageModule.forChild(BeveragesPage),
  ],
})
export class BeveragesPageModule {}
