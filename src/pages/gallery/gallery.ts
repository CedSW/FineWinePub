import {Component} from '@angular/core';
import {Loading, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { File } from '@ionic-native/file';
import { ModalController, LoadingController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import {ApiProvider} from '../../providers/api/api';


/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-gallery',
    templateUrl: 'gallery.html',
})
export class GalleryPage {

    public fileTransfer: FileTransferObject = this.transfer.create();

    private gallery: any;
    private localPath: any;
    private photos: any[] = [];
    private iterator: number = 0;
    private imgUrl = [];
    loading: Loading;
    initial: Loading;
    constructor(public api: ApiProvider, private transfer: FileTransfer, private file: File, public loadingCtrl: LoadingController, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.showLoadingInitial();
        this.getGallery();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GalleryPage');
        this.localPath = this.file.dataDirectory;


    }

    createGallery() {
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

    showLoadingInitial() {
        this.initial = this.loadingCtrl.create({
            spinner: 'crescent',
        });
        this.initial.present();
    }

    getGallery(){
        this.api.loadGallery().then((val) => {
            this.storage.set('gallery', val.data);
            this.checkGallery();
        })
    }

    checkGallery(){
        this.storage.get('status').then((status) => {
            if (status === 'download sucessful'){
                this.api.loadGallery().then(data => {
                    this.storage.get('gallery').then((val) => {
                        if (JSON.stringify(val) != JSON.stringify(data.data)){
                            this.download();
                            console.log('updated');
                        } else {
                            this.createGallery();
                            this.initial.dismiss();
                        }
                    });
                });
            } else {
                this.download();
                console.log('downloaded');

            }
        }, (error) => {
            console.log('doesnt exist', error);
        });
    }


    download() {
        this.storage.get('gallery').then((val) => {
            let gallery = val['0'];
            console.log(gallery);
            for (let j = 0; j <= gallery.length; j++) {
                for (let link of gallery[j].images) {
                    this.imgUrl.push(link.image);
                    this.fileTransfer.download('http://www.senkovnapub.cz/' + link.image, this.file.dataDirectory + link.image).then((entry) => {
                        console.log('download complete: ' + entry.toURL());
                    }, (error) => {
                        // handle error
                    });
                }
            }

        });
        this.storage.set('status', 'download sucessful');
        this.storage.get('status').then((val) => {
            console.log(val);
        });
        this.createGallery();
        this.initial.dismiss();
    }
}