import { LightningElement } from 'lwc';

export default class ParentLwc extends LightningElement {

    countValue=0;

    handleDecrement(){
        this.countValue--;
    }

    handleIncrement(){
        this.countValue++;
    }

    handleMultiply(event){
        const multiplyvalue = event.detail;

        this.countValue *= multiplyvalue;
    }
}