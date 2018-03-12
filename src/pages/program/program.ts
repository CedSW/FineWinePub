import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {

  private program: any;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.loadContent();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }

  loadContent(){
    this.storage.get('program').then((val) => {
      this.program = val['0'];
    });
  }
}
