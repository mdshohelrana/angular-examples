import { map, catchError } from 'rxjs/operators';
import { WeatherItem } from './weather-item/weather-item';
import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather-list/weather-data'
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  posts: any[];
  handleError;
  getWeatherItems(){
    return WEATHER_ITEMS;
  }
  constructor(private http: HttpClient) { }

  addWeatherItem(weatherItem: WeatherItem){
    WEATHER_ITEMS.push(weatherItem);
  }
  // totalData;
  



  searchWeatherTemp(city: string): Subject<string> {
     let dataSub = new Subject<string>();
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=b22fe8f91ce042e4da5acb5f6ad52f51`)
      .subscribe((data) => {
       // console.log(data);
        //dataSub = data;
        // this.totalData = data;
       // dataSub.data;
        dataSub.next(data['main']);
      //  dataSub.next();
      }, (err) => {
        //console.log(err);
        return err;
      });
    return dataSub;
  }



  // searchWeatherItem(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<string> {
  //   let dataSub = new Subject<string>();
  //   this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=b22fe8f91ce042e4da5acb5f6ad52f51`)
  //     .subscribe((data) => {
  //       console.log(data);
  //       //dataSub = data;
  //       dataSub.next(data['weather']);
  //     //  dataSub.next();
  //     }, (err) => {
  //       console.log(err);
  //     });
  //   return dataSub;
  // }

  // searchWeatherItem(cityName: string):Observable<any> {
  //   console.log(this.handleError);
  //   //password: imonimon
  //   return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=KEY&units=metric`)
  //   .pipe(
  //     map(response => response),
  //     catchError(
  //       error=>{
  //         console.log(error);
  //         return Observable.throw(error)
  //       }
  //       )
  //   )
    
  // }
  
}
