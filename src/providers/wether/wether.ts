import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WetherProvider {

  api: string = '0d63b68b4bbd9c46'
  url: string;

  constructor(public http: Http) {
    console.log('Hello WetherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.api + '/conditions/q';
  }
  getWeather(city, state) {
    return this.http.get(this.url + '/' + state + '/' + city + '.json')
      .map(res => res.json());
  }

}
