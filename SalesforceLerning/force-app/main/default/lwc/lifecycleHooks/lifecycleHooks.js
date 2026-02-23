import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {

    constructor() {
    super();
    console.log('Constructor called');
    this.message = 'Hello LWC';
    }

        connectedCallback() {
        console.log('Connected to DOM');
    }

    renderedCallback() {
    console.log('Rendered!');
    if (!this.isRendered) {
        this.isRendered = true;
        }
    }

}