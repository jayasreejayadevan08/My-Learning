import { LightningElement } from 'lwc';

export default class ModalEX2 extends LightningElement {
    isModalOpen = false;
 
    openModal() {
        this.isModalOpen = true;
    }
 
    closeModal() {
        this.isModalOpen = false;
    }
}