import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WinePage } from './wine';

@NgModule({
  declarations: [
    WinePage,
  ],
  imports: [
    IonicPageModule.forChild(WinePage),
  ],
})
export class WinePageModule {}
