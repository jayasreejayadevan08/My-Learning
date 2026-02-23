import { LightningElement , wire} from 'lwc';
import getWeather from '@salesforce/apex/IntegrationExample1.getWeather';

export default class IntegrationWeatherEXp1 extends LightningElement {

    city = ''; //to pass value // making it null for making dynamic 'Palakkad'
    weather; // to store the response
    error; // error to hold if any error

   handleChange(event){ // for dymanic method
        this.city = event.target.value;
    }
getWeatherData() {
        if (!this.city) {
            this.error = 'Please enter a city name';
            this.weather = undefined;
            return;
        }
 
        getWeather({ city: this.city })
            .then(data => {
                const parsed = JSON.parse(data);
 
                this.weather = {
                    city: parsed.name,
                    temp: parsed.main.temp,
                    feelsLike: parsed.main.feels_like,
                    description: parsed.weather[0].description,
                    windSpeed: parsed.wind.speed
                };
 
                this.error = undefined;
            })
            .catch(error => {
                this.error = error.body?.message || 'Error fetching weather';
                this.weather = undefined;
            });
    }
    
    // @wire(getWeather, {city: '$city'})  ---Commented for dunamic method
    // wiredWeather({error, data}){
    //     if (data) {
    //         const parsed = JSON.parse(data);// to convert string to json, since lwc deals with json and the apex returns string
 
    //         this.weather = { // we are getting this data from the external api and we are giving it here to display in UI
    //             city: parsed.name,
    //             temp: parsed.main.temp,
    //             feelsLike: parsed.main.feels_like,
    //             description: parsed.weather[0].description,
    //             windSpeed: parsed.wind.speed
    //         };
 
    //         this.error = undefined;
    //     } else if (error) {
    //         this.error = error.body.message;
    //         this.weather = undefined;
    //     }
    // }
        
    
}