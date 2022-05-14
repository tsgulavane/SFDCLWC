import { LightningElement } from 'lwc';

export default class ParentCpomponent extends LightningElement {
    handleClick1(){
        this.template.querySelector("c-child-component").handleChangeValue();
    }
}