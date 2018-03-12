import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from '@ionic/storage';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    public about: any;
    private programHome: any;

    constructor( public navCtrl: NavController, public storage: Storage ) {
        this.loadAbout();
        this.loadProgram();


    }

    loadAbout() {
        this.storage.get('about').then((val) => {
            this.about = val['0'];
           let index = this.about.indexOf('</p>');
           this.about = this.about.substr(0,index);
        });

    }
    loadProgram(){
        this.storage.get('program').then((val) => {
            this.programHome = val['0'];
        });
    }

}
