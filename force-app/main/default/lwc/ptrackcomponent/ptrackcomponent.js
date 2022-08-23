import { LightningElement, track } from 'lwc';

export default class Ptrackcomponent extends LightningElement {

    @track fullName ={ firstname:"", lastname:"" };

    handleChange(event){
        const field =event.target.name;

        if(field ==='firstName'){
            this.fullName.firstname = event.target.value;

        } 
        else if(field==='lastName'){
            this.fullName.lastname = event.target.value;
        }
        

    }

}