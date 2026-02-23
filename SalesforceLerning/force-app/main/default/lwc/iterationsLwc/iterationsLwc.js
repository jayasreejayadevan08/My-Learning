import { LightningElement } from 'lwc';

export default class IterationsLwc extends LightningElement {

    contacts = [
        {
            Id : 1,
            Name : 'Steve',
            Role : 'CEO'
        },
        {
            Id : 2,
            Name : 'Simth',
            Role : 'Manager'
        },
        {
            Id : 3,
            Name : 'Ram',
            Role : 'Director'
        }
    ];


    Fruits  = [
        {
            Id : 1,
            Name : 'Apple',
            Price : 100
        },

        {
            Id : 2,
            Name : 'Banana',
            Price : 50
        },

        {
            Id : 3,
            Name : 'Orange',
            Price : 150
        },

        {
            Id : 4,
            Name : 'Grapes',
            Price : 100
        },

        {
            Id : 5,
            Name : 'Papaya',
            Price : 200
        }
    ];
}