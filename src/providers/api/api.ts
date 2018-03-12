import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  loadAbout() {

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true,
    });

    return this.http
        .get('http://www.senkovnapub.cz/?option=com_ajax&plugin=senkovna&format=json&fn=about', options)
        .map((response) =>{
          return response.json()
        })
        .toPromise();

  }

  loadContact() {

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true,
    });

    return this.http
        .get('http://www.senkovnapub.cz/?option=com_ajax&plugin=senkovna&format=json&fn=contact', options)
        .map((response) =>{
          return response.json()
        })
        .toPromise();

  }



  loadGallery() {

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true,
    });

    return this.http
        .get('http://www.senkovnapub.cz/?option=com_ajax&plugin=senkovna&format=json&fn=gallery', options)
        .map((response) =>{
          return response.json()
        })
        .toPromise();

  }

  loadMenu() {

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true,
    });

    return this.http
        .get('http://www.senkovnapub.cz/?option=com_ajax&plugin=senkovna&format=json&fn=menu', options)
        .map((response) =>{
          return response.json()
        })
        .toPromise();

  }


  loadProgram() {

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true,
    });

    return this.http
        .get('http://www.senkovnapub.cz/?option=com_ajax&plugin=senkovna&format=json&fn=program', options)
        .map((response) =>{
          return response.json()
        })
        .toPromise();

  }
}
