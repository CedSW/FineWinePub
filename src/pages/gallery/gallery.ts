import {Component} from '@angular/core';
import {IonicPage, Loading, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { File } from '@ionic-native/file';
import { ModalController, LoadingController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-gallery',
    templateUrl: 'gallery.html',
})
export class GalleryPage {

    private gallery: any;
    private localPath: any;
    private photos: any[] = [];
    private iterator: number = 0;
    loading: Loading;

    constructor(public loadingCtrl: LoadingController, public modalCtrl: ModalController, private file: File, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GalleryPage');
        this.localPath = this.file.dataDirectory;
        this.loadContent();

    }

    loadContent() {
        this.storage.get('gallery').then((val) => {
            this.gallery = val['0'];
            console.log(this.gallery);
            for (let j = 0; j <= this.gallery.length; j++) {
                for (let link of this.gallery[j].images) {
                    this.photos.push({url: this.file.dataDirectory+link.image});
                    link.id = this.iterator;
                    this.iterate();
                }


            }
        });
        console.log(this.photos);
    }

    slideGallery(id){
        let modal = this.modalCtrl.create(GalleryModal, {
            photos: this.photos,
            initialSlide: id,
        });
        modal.present().then(() => {
            this.loading.dismiss();
        });
    }

    iterate(){
        this.iterator++;
    }

    showLoading(id) {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
        });
        this.loading.present().then(() => {
          this.slideGallery(id);
        });
    }
}