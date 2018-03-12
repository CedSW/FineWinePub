import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the LunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lunch',
  templateUrl: 'lunch.html',
})
export class LunchPage {

  private lunch: any;
  private lunchText: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.loadMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LunchPage');
  }

  loadMenu() {
    this.storage.get('menu').then((val) => {
      this.lunch = val[0][1];
      this.lunchText = this.lunch.text;
    });
  }
}
