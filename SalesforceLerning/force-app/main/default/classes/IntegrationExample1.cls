public with sharing class IntegrationExample1 {
    private static final String API_KEY = 'af9484e884625b1ce444b32f64a4751a';
    @AuraEnabled(cacheable=true)
        public static String getWeather(String city){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        String endpoint =
            'https://api.openweathermap.org/data/2.5/weather'
            + '?q=' + EncodingUtil.urlEncode(city, 'UTF-8')
            + '&units=metric'
            + '&appid=' + API_KEY;
 
        request.setEndpoint(endpoint);
        request.setMethod('GET');
        request.setTimeout(10000);
 
        HttpResponse res = http.send(request);
 
        if (res.getStatusCode() != 200) {
            throw new AuraHandledException(
                'Weather API Error: ' + res.getBody()
            );
            
    }
    system.debug('Body' +res.getBody());
    return res.getBody();
   
}
}