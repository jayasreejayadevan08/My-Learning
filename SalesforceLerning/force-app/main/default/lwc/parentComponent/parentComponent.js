import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    handleClick() {
        // Select the child component and call its public method
        const child = this.template.querySelector('c-child-component');
        if (child) {
            child.changeMessage('Hello from the Parent!');
        }
    }
}