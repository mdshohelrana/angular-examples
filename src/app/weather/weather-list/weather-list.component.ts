import { WeatherService } from './../weather.service';
import { WeatherItem } from './../weather-item/weather-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {

  newCityControl:string = '';
  weatherItems: WeatherItem[];
  currentTemp;
  cityName;
  showResult = false;
  cityNotFound = false;

  constructor( private weatherService: WeatherService) { }

  ngOnInit():any {
    this.weatherItems = this.weatherService.getWeatherItems();
  }
  
  onSubmit(){

  }
  allData;

  onSearch(){
    console.log(this.newCityControl);
    this.cityName = this.newCityControl;
    this.weatherService.searchWeatherTemp(this.newCityControl)
      .subscribe(
        data => {
        //   const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
        //  this.weatherService.addWeatherItem(weatherItem);
        this.allData = data;
        this.cityNotFound = false;
        this.showResult = true; 
        console.log( "type of", typeof(this.allData));

        return;
        }
      )
      this.cityNotFound = true;

      
    //  console.log("all data", this.allData);
  }
  onKeyUp(){
    this.showResult = false;
  }
 

}
