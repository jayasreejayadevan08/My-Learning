import { LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/datatableContactlist.getContactList';

const Columns = [
    {label:'FirstName' ,fieldName: 'FirstName'},
     {label:'LastName' ,fieldName: 'LastName'},
     {label:'Phone' ,fieldName: 'Phone', type : 'phone'},
     {label:'Email' ,fieldName: 'Email', type : 'email'},
     {label:'Title' ,fieldName: 'Title'},
     {label:'Department' ,fieldName: 'Department'},
     

];


export default class DatatableContactlist extends LightningElement {
    error;
    columns = Columns;

    @wire(getContact)
    contacts;
}