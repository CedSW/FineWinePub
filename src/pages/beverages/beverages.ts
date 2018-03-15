import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the BeveragesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-beverages',
  templateUrl: 'beverages.html',
})
export class BeveragesPage {

  private beverages: any;
  private beveragesText: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.loadMenu()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeveragesPage');
  }

  loadMenu() {
    this.storage.get('menu').then((val) => {
      this.beverages = val[0][3];
      this.beveragesText = this.beverages.text;
    });
  }
}
