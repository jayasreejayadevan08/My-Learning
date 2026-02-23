import { LightningElement, api} from 'lwc';

export default class ChildComponent extends LightningElement {

   message;

    @api changeMessage(strString){

        this.message = strString.toUpperCase();
        
    }
}