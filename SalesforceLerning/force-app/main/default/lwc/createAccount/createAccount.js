import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation';
import Name_Field from '@salesforce/schema/Account.Name';
import Industry_Field from '@salesforce/schema/Account.Industry';
 
export default class CreateAccount extends NavigationMixin(LightningElement) {
    fields = [Name_Field, Industry_Field];
 
    handleSuccess(event){
        const recordId = event.detail.id;
        console.log('Account Created Successfully',event.detail.id);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                recordId: recordId,
                objectApiName:'Account',
                actionName:'view'
            }
        });
    }

}