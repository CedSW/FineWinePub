import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {Storage} from '@ionic/storage';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {HomePage} from '../home/home';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  public fileTransfer: FileTransferObject = this.transfer.create();
  private imgUrl = [];

  constructor(public api: ApiProvider, public navCtrl: NavController, public navParams: NavParams, private transfer: FileTransfer, private file: File, public storage: Storage) {
    this.loadAbout();
    this.loadProgram();
    this.loadGallery();
    this.loadContact();
    this.loadMenu();
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

  loadAbout() {
    this.api.loadAbout().then(data => {
      let about = data.data;
      this.storage.set('about', about);
    })
  }

  loadContact() {
    this.api.loadContact().then(data => {
      let contact = data.data;
      this.storage.set('contact', contact);
    })
  }

  loadMenu() {
    this.api.loadMenu().then(data => {
      let menu = data.data;
      this.storage.set('menu', menu);
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
        console.log('gallery downloaded');
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
          this.fileTransfer.download('http://senkovnapub.cz/' + link.image, this.file.dataDirectory + link.image).then((entry) => {
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
