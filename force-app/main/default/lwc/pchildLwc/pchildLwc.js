import { LightningElement } from 'lwc';

export default class PchildLwc extends LightningElement {

    handleSubstract(){
        this.dispatchEvent(new CustomEvent('subtract'));
    }

    handleAddition(){
        this.dispatchEvent(new CustomEvent('add'));

    }
}