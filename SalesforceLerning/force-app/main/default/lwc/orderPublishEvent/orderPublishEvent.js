import { LightningElement } from 'lwc';
import { subscribe, unsubscribe, onError } from 'lightning/empApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class OrderPublishEvent extends LightningElement {

    channelName = '/event/Order_Event__e';
    subscription = {};
    latestOrder;
 
    connectedCallback() {
        this.handleSubscribe();
        this.registerErrorListener();
    }
 
    handleSubscribe() {
        const messageCallback = (response) => {
            console.log('Event received: ', JSON.stringify(response));
            this.handleEventData(response.data.payload);
        };
 
        subscribe(this.channelName, -1, messageCallback).then(response => { // -1 is for start with the recent event, which means show the latest event
            this.subscription = response;
            console.log('Subscribed to: ', response.channel);
        });
    }
 
    handleEventData(payload) {
        const orderId = payload.Order_Id__c;
        const orderStatus = payload.Order_Status__c;
        const orderAmount = payload.Order_Amount__c;
 
        this.latestOrder = {
            id: orderId,
            status: orderStatus,
            amount: orderAmount
        };
 
        this.showToast('Order Update',
            `Order ${orderId} status: ${orderStatus}`,
            'success'
        );
    }
 
    registerErrorListener() {
        onError(error => {
            console.error('EMP API error: ', JSON.stringify(error));
        });
    }
 
    disconnectedCallback() {
        this.handleUnsubscribe();
    }
 
    handleUnsubscribe() {
        unsubscribe(this.subscription, response => {
            console.log('Unsubscribed from: ', response.channel);
        });
    }
 
    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant
            })
        );
    }
}