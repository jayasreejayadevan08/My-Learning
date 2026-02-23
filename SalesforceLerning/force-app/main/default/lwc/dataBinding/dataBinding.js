import { LightningElement } from 'lwc';

     export default class DataBinding extends LightningElement {

          data = 'Hello November JS to html';
     msg;
     recMsg;
     message = "Initial Message";

     handleChange(event){
          this.msg = event.target.value;
          console.log(this.msg);
     }
     updateMessage(){
        this.message = "Message Updated After Button Click!";
 
    }

     }