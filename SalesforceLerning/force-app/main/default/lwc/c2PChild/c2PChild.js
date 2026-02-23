import { LightningElement } from 'lwc';

export default class C2PChild extends LightningElement {
     message = '';

    handleChange(event){
        this.message = event.target.value; // what we enter in ui
    }

    sendMessage(){
        const evt = new CustomEvent('notify',{   //Custom event class
            detail:{

                name: 'Rajesh',
                age: 25,            }
            // this.message    //what we entered there we are going to send
        });
 
        this.dispatchEvent(evt);
    }
}