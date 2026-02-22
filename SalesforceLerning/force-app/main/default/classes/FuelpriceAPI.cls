public with sharing class FuelpriceAPI {
  
@AuraEnabled(cacheable=true)

public static String getFuelprice(String state, String city){

Http http = new HTTP();
HttpRequest req = new HttpRequest();
//Commenetd for  dynamic ======String endpoint = 'https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/history/india/maharashtra/mumbai';
String endpoint = 'https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/history/india/'+ state+ '/'+ city;

req.setEndpoint(endpoint);
req.setMethod('GET');
req.setTimeout(10000);

req.setHeader('x-rapidapi-key', '7b59ff3ef5msh8885608ee1a377bp1ba99djsne4d81b535bbf');		
req.setHeader('x-rapidapi-host', 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com');	

HttpResponse res = http.send(req);
system.debug('Http Respose' +res.getBody());

return res.getBody();


}

}