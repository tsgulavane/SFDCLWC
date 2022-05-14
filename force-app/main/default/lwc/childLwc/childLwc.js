import { LightningElement } from 'lwc';

export default class ChildLwc extends LightningElement {

    handleSubstract(){
        this.dispatchEvent(new CustomEvent('substract'));
    }

    handleAdd(){
        this.dispatchEvent(new CustomEvent('add'));
    }

    handleMultiply(event){
        const valueForMultiply =event.target.value;
        this.dispatchEvent(new CustomEvent('multiply', 
            {detail :valueForMultiply}));
    }


}