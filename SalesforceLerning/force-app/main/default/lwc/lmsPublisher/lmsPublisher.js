import { LightningElement, wire} from 'lwc';
import mesgchannel from '@salesforce/messageChannel/LMSexp1__c'
//import the MessageContext is to send/receive the message will combine it with wire method both in publisher and subscriber
// Publish is the method to publish the message
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsPublisher extends LightningElement {
    inputValue; // property to store the input value
     @wire(MessageContext)
     context; // it is to bridge b/w 2 lwc components to send the message to the subscriber
    inputHandler(event){
        this.inputValue = event.target.value;
    }
 
    publishMessage(){// button click method
        const message={
            lmsData:{   // this is the field name from the xml file.
                value:this.inputValue
            }
        }
        publish(this.context,mesgchannel, message);
    }
}