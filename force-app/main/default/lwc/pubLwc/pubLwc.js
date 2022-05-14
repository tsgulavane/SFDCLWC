import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import COUNTING_UPDATED_CHANNEL from '@salesforce/messageChannel/Counting_Update__c'

export default class PubLwc extends LightningElement {

    @wire(MessageContext)
    messageContext;

    horizontalIncrement() {
        const payload = {
            operator: 'add',
            constant: 1
        };

        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);

    }

    horizontalDecrement() {
        const payload = {
            operator: 'sub',
            constant: 1
        };
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);

    }

    horizontalMultiplication() {
        const payload = {
            operator: 'multiply',
            constant: 2
        };

        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);

    }

}