import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WetherProvider } from '../../providers/wether/wether'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  location: {
    city: string;
    state: string;
  }

  constructor(public navCtrl: NavController,
    private weatherProvider: WetherProvider,
    private storage: Storage) {

  }
  ionViewWillEnter() {
    this.storage.get('location').then((val) => {
      if (val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Miami',
          state: 'FL'
        }
      }
      this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather => {
        this.weather = weather.current_observation;
      });
    });
  }
}
