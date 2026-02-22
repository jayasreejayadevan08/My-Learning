public with sharing class createAccount {
    @AuraEnabled
    public static Account  createAcc(Account acc){
        try {
                insert acc;
                return acc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}