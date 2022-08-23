import { LightningElement } from 'lwc';

export default class PparentLwc extends LightningElement {

    countValue=0;

    handleSubstraction(){
        this.countValue -=1;
    }

    handleAddition(){
        this.countValue +=1;
    }


}