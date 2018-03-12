import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  private part1: any;
  private part2: any;
  private contact: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.loadContact();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  loadContact(){
    this.storage.get('contact').then((val) => {
     this.contact = val;
     let index = val.indexOf('document');
     console.log(index);
     //this.contact = this.contact.toString();
     //this.contact = this.contact.substr(0, index);

      console.log(this.contact);
    });
  }
}
