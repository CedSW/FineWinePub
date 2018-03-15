import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {MenuPage} from '../pages/menu/menu';
import {ProgramPage} from '../pages/program/program';
import {AboutPage} from '../pages/about/about';
import {GalleryPage} from '../pages/gallery/gallery';
import {ModalController} from 'ionic-angular';
import {ReservationPage} from '../pages/reservation/reservation';
import {LoadingPage} from '../pages/loading/loading'

import { FCM } from '@ionic-native/fcm';
import { AlertController } from 'ionic-angular';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LoadingPage;

    pages: Array<{ title: string, component: any }>;



    constructor(private alertCtrl: AlertController, private fcm: FCM, public modalController: ModalController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();



        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'ÚVOD', component: HomePage},
            {title: 'NAŠE NABÍDKA', component: MenuPage},
            {title: 'PROGRAM', component: ProgramPage},
            {title: 'O NÁS', component: AboutPage},
            {title: 'GALERIE', component: GalleryPage},
        ];

    }


    initializeApp() {
        this.platform.ready().then(() => {

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.fcm.subscribeToTopic('news');

            this.fcm.getToken().then(token => {
                // backend.registerToken(token);

            });

            this.fcm.onNotification().subscribe(data => {
                if (data.wasTapped) {
                    console.log("Received in background");
                } else {
                    let alert = this.alertCtrl.create({
                        title: data.title,
                        subTitle: data.body,
                        buttons: ['OK']
                    });
                    alert.present();
                }

            });

            this.fcm.onTokenRefresh().subscribe(token => {
                // backend.registerToken(token);
            });

            this.fcm.unsubscribeFromTopic('news');
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }


    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    reserveTable() {
        let reserveModal = this.modalController.create(ReservationPage);
        reserveModal.present();
    }


}
