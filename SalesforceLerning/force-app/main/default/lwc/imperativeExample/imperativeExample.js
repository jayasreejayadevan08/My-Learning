import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/contactFetch.getContactList';
const Columns = [
    {label: 'First Name' , fieldName: 'FirstName'},
    {label: 'Last Name' , fieldName: 'LastName'},
    {label: 'Phone' , fieldName: 'Phone'},
    {label: 'Email' , fieldName: 'Email'},
]

export default class ImperativeExample extends LightningElement {
    contacts;
    error;
    columns = Columns;
 
    async handleClick(event){
        try{
            this.contacts = await getContactList();
            this.error = undefined;
        }catch(error){
            this.error = error;
            this.contacts = undefined;
        }
    }
}