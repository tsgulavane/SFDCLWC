import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class FirstCompo extends LightningElement {

    myTitle="SaleforceNOOB"

    connectedCallback(){
        let valueofmyfun = this.myFunction(15,3);
        window.alert(valueofmyfun);
    }

    myFunction(divident, divisor){
        return(divident/divisor);
    }


}