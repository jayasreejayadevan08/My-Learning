public with sharing class contactFetch {
@AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, FirstName, LastName, Title, Phone, Email, Department FROM Contact LIMIT 10];
    }
    
}