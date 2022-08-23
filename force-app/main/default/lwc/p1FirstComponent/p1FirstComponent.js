import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class P1FirstComponent extends LightningElement {

    myTitle ="Salesforce World";

    handleClick(){
//        window.alert("Button clicked");
        this.showToast();
    }

    showToast(){
        const event = new ShowToastEvent({
            title : 'Show toast demo',
            Message: 'want to display toast example',
            variant : 'success'
        })

        this.dispatchEvent(event);
    }

}