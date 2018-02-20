import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ProgramPage } from '../pages/program/program';
import { AboutPage } from '../pages/about/about';
import { GalleryPage } from '../pages/gallery/gallery';
import { FoodPage } from '../pages/food/food';
import { LunchPage } from '../pages/lunch/lunch';
import { WinePage } from '../pages/wine/wine';
import { BeveragesPage } from '../pages/beverages/beverages';
import { ReservationPage } from '../pages/reservation/reservation'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ProgramPage,
    AboutPage,
    GalleryPage,
    FoodPage,
    LunchPage,
    WinePage,
    BeveragesPage,
    ReservationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ProgramPage,
    AboutPage,
    GalleryPage,
    FoodPage,
    LunchPage,
    WinePage,
    BeveragesPage,
    ReservationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
