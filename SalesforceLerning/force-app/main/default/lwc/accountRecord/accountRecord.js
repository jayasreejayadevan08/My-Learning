import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import SLA_FIELD from '@salesforce/schema/Account.SLA__c';
import SLAExperirationDate_FIELD from '@salesforce/schema/Account.SLAExpirationDate__c'
import SLASerialNumber_FIELD from '@salesforce/schema/Account.SLASerialNumber__c';
 
 

export default class AccountRecord extends LightningElement {
    @api objectApiName;
    @api recordId;
 
    fields = [NAME_FIELD, SLA_FIELD, SLAExperirationDate_FIELD, SLASerialNumber_FIELD];
}