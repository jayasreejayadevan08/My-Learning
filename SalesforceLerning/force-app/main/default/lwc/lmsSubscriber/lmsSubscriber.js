import { LightningElement , wire} from 'lwc';
import mesgchannel from '@salesforce/messageChannel/LMSexp1__c';
import{subscribe, MessageContext, APPLICATION_SCOPE} from 'lightning/messageService';
//APPLICATION_SCOPE defines how the suscription will be working
export default class LmsSubscriber extends LightningElement {
    recievedMessage //property to show ase the message in frontend
    @wire(MessageContext)
    context
 
    connectedCallback(){
        this.subscribeMessage();
    }
 
    subscribeMessage(){
        subscribe(this.context, mesgchannel, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE});
    }
 
    handleMessage(message){
        this.recievedMessage = message.lmsData.value ? message.lmsData.value:"No Message"
    }
 
}