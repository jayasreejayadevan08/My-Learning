import { LightningElement } from 'lwc';
import AccountName  from '@salesforce/schema/Account.Name';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import Active from '@salesforce/schema/Account.Active__c';

export default class LdsExampleaccount extends LightningElement {
    fields = [AccountName, Active];

    handleSuccess(event){

        const recordId = event.detail.id;
        console.log('Account created with Id: ' + event.detail.id);
        this.dispatchEvent(
            new ShowToastEvent({
                title : 'Success!',
                message: 'Account Created Successfully {0}',
                messageData:[
                    {
                        url: '/lightning/r/Account/'+recordId+'/view',
                        label: 'View Record'
                    }
                ],
                variant: 'success',
                mode:'sticky',
            })

        );
    }

}