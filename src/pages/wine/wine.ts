import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the WinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wine',
  templateUrl: 'wine.html',
})
export class WinePage {

  private wine: any;
  private wineText: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.loadMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WinePage');
  }

  loadMenu() {
    this.storage.get('menu').then((val) => {
      this.wine = val[0][2];
      this.wineText = this.wine.text;
    });
  }
}
