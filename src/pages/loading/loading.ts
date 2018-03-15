import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {Storage} from '@ionic/storage';
import {HomePage} from '../home/home';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {


  constructor(private alertCtrl: AlertController, public api: ApiProvider, public navCtrl: NavController, public navParams: NavParams,  public storage: Storage) {

    this.loadContent();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Připojení k internetu',
      subTitle: 'Pro aktuální obsah je třeba mít připojení k internetu, jinak zobrazená data mohou být neaktuální',
      buttons: ['Rozumím']
    });
    alert.present();
  }

  loadContent() {

    this.api.loadContact().then(data => {
      let contact = data.data;
      this.storage.set('contact', contact);
    });

    this.api.loadMenu().then(data => {
      let menu = data.data;
      this.storage.set('menu', menu);
    });

    this.api.loadProgram().then(data => {
      let program = data.data;
      this.storage.set('program', program);
    });

    this.api.loadAbout().then(data => {
        let about = data.data;
        this.storage.set('about', about);
        this.navCtrl.setRoot(HomePage);
    });
    this.api.loadAbout().catch(() => {
      this.presentAlert();
      this.navCtrl.setRoot(HomePage);
    });
  }

}
