import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  private part1: any;
  private part2: any;
  private email = 'info@senkovnapub.cz </br> ';

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.loadContact();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  loadContact(){
    this.storage.get('contact').then((val) => {
     let index = val[0].indexOf('<span id');
     let index2 = val[0].indexOf('<h4>Otevírací doba:</h4>');
     console.log(index2);
     console.log(val[0].length);
     this.part1 = val[0].substr(0,index);
     this.part2 = val[0].substr(index2, val[0].length);
     console.log(this.part2);
     this.part1 += this.email;
     this.part1 += this.part2;
      console.log(val[0]);

    });
  }
}
