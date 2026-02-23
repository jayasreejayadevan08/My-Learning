import { LightningElement } from 'lwc';

export default class C2PParent extends LightningElement {
    //recMsg = '';
    name = '';
    age = '';
    handleMessage(event){
       // this.recMsg = event.detail;     // received from child which we enterd in ui
        this.name = event.detail.name;
        this.age = event.detail.age;
    }
}