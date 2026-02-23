import { LightningElement } from 'lwc';

export default class c2PChildComponent extends LightningElement {
    message = '';

    handleChange(event){
        this.message = event.target.value; // what we enter in ui
    }

    sendMessage(){
        const evt = new CustomEvent('notify',{   //Custom event class
            detail: this.message    //what we entered there we are going to send
        });
 
        this.dispatchEvent(evt);
    }
}