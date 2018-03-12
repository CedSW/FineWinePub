import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

  private food: any;
  private foodText: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.loadMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

  loadMenu() {
    this.storage.get('menu').then((val) => {
      this.food = val[0][0];
      this.foodText = this.food.text;
    });
  }
}
