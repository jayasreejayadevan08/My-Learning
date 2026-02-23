import { LightningElement} from 'lwc';
import LightningModal from 'lightning/modal';

export default class ModelDialogex extends LightningElement {
    isModalOpen = false;
 
    openModal() {
        this.isModalOpen = true;
    }
 
    closeModal() {
        this.isModalOpen = false;
    }
}