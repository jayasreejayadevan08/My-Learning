import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';   
import State from '@salesforce/schema/Asset.State';

export default class NavigationDemo extends NavigationMixin(LightningElement) {

    handleClick(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.google.com',
            //     objectApiName: 'Account',
            //     recordId : '001gK00000TlSrNQAV',
            //     actionName: 'list'},
            //     state: {
            //     filterName: 'MyAccounts' // Or use a custom list view ID
        }
                
            });
        
        }
    
navigateToLwc(){ 
        var defination={ 
            componentDef:'c:createAccount', //specify the other component
        }
        this[NavigationMixin.Navigate]({ 
            type:'standard__webPage',
            attributes: { 
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }

}