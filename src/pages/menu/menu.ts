import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodPage } from '../food/food';
import { LunchPage } from '../lunch/lunch';
import { WinePage } from '../wine/wine';
import { BeveragesPage } from '../beverages/beverages';
import { ModalController } from 'ionic-angular';
import { ReservationPage } from '../reservation/reservation'
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  tab1Root: any = FoodPage;
  tab2Root: any = LunchPage;
  tab3Root: any = WinePage;
  tab4Root: any = BeveragesPage;


  constructor(public modalController: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  reserve(){
    let reserveModal = this.modalController.create(ReservationPage);
    reserveModal.present();
  }
}
