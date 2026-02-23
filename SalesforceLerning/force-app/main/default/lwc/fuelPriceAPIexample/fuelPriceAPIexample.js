import { LightningElement, wire } from 'lwc';
import getFuelprice from '@salesforce/apex/FuelpriceAPI.getFuelprice';  


export default class FuelPriceAPIexample extends LightningElement {

    error;    
    details;
    //added below for dynamic
    state = '';
    city = '';

    handleStateChange(event){
        this.state = event.target.value;
    }
    handleCityChange(event){
        this.city = event.target.value;
    }
getFuelpriceData(){
        if (!this.state || !this.city) {
            this.error = 'Please enter a state and city name';
            this.details = undefined;
            return;
        }
       
         
        getFuelprice({ state: this.state, city: this.city })
                .then(data => {
                    const parsed = JSON.parse(data);
       console.log*('Parsed' + parsed);
                    this.details = {
                        city: parsed.cityName,
                        state: parsed.stateName,
                        date: parsed.history[0].applicableOn,
                        petrol: parsed.history[0].fuel.petrol.retailPrice,
                        cng: parsed.history[0].fuel.cng.retailPrice,
                        diesel: parsed.history[0].fuel.diesel.retailPrice,
                        lpg: parsed.history[0].fuel.lpg.retailPrice,
                    };
       
                    this.error = undefined;
                }) .catch (error => {
                    this.error = error.body.message;
                    this.details = undefined;
                });
            }
    }
   //   @wire(getFuelprice) 
   //   wiredFuel({error, data}){
   //      if (data){
   //           const parsed = JSON.parse(data);
   //           console.log('Parsed' + parsed);
   //           this.details = {
   //              city: parsed.cityName,
   //              state: parsed.stateName,
   //              date: parsed.history[0].applicableOn,
   //              petrol: parsed.history[0].fuel.petrol.retailPrice,
   //              diesel: parsed.history[0].fuel.diesel.retailPrice,
   //              cng: parsed.history[0].fuel.cng.retailPrice,
   //              lpg: parsed.history[0].fuel.lpg.retailPrice
                
   //           };
   //           this.error = undefined;
   //          }

   //          else if (error){
   //              this.error = error;
   //              this.details = undefined;
   //      }
        

   //   }