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
import { ReservationPage } from '../pages/reservation/reservation';
import { ReviewPage } from '../pages/review/review';
import { ContactPage } from '../pages/contact/contact';
import { LoadingPage } from '../pages/loading/loading';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FCM } from '@ionic-native/fcm';



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
    ReservationPage,
    ReviewPage,
    ContactPage,
    LoadingPage
  ],
  imports: [
    BrowserModule,
      HttpModule,
    ionicGalleryModal.GalleryModalModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay'
    }),
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
    ReservationPage,
    ReviewPage,
    ContactPage,
    LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig},
    ApiProvider,
    FileTransfer,
    FileTransferObject,
    File,
    FCM

  ]
})
export class AppModule {}
