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

import {ApiProvider} from '../providers/api/api';
import {Storage} from '@ionic/storage';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = 'LoadingPage';

    pages: Array<{ title: string, component: any }>;
    public fileTransfer: FileTransferObject = this.transfer.create();
    private imgUrl = [];

    constructor(private transfer: FileTransfer, private file: File, public storage: Storage, public modalController: ModalController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public api: ApiProvider) {
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
            // this.loadProgram();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.loadAbout();
            // this.loadContact();
            // this.loadGallery();
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

    loadAbout() {
        this.api.loadAbout().then(data => {
            let about = data.data;
            this.storage.set('about', about);
        })
    }

    loadContact() {
        this.api.loadContact().then(data => {
            let contact = data;
            this.storage.set('contact', contact);
        })
    }

    loadProgram() {
        this.api.loadProgram().then(data => {
            let program = data.data;
            this.storage.set('program', program);
        })
    }

    loadGallery() {
        this.storage.get('gallery').then((val) => {
            this.api.loadGallery().then(data => {
                    if (JSON.stringify(val) != JSON.stringify(data.data)){
                        this.storage.set('gallery', data.data);
                        this.download();
                        console.log('gallery updated');
                    }
                });

            });
        this.storage.get('gallery').catch(() => {
            this.api.loadGallery().then(data => {
                    this.storage.set('gallery', data.data);
                    this.download();
                    console.log('gallery updated');
            });
        });
    }

    download() {
        this.storage.get('gallery').then((val) => {
            let gallery = val['0'];
            console.log(gallery[0]);

            for (let j = 0; j <= gallery.length; j++) {
                for (let link of gallery[j].images) {
                    console.log(link.image);
                    this.imgUrl.push(link.image);
                    this.fileTransfer.download('http://senkovnapub.cz/' + link.image, this.file.dataDirectory + j + link.image).then((entry) => {
                        console.log('download complete: ' + entry.toURL());
                    }, (error) => {
                        // handle error
                    });
                }


            }
        });
        console.log(this.imgUrl);

    }

}
