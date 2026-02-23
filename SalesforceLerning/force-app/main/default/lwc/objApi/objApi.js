import { LightningElement, api} from 'lwc';

export default class ObjApi extends LightningElement {

    @api recordId;  
    @api objectApiName; 

    connectedCallback() {
        console.log('recordId: ' + this.recordId);
        console.log('objectApiName: ' + this.objectApiName);
    }
    
}