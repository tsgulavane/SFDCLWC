import { LightningElement } from 'lwc';
import { showToastEvent } from 'lightning/platformShowToastEvent';

import PLAYER_OBJECT from '@salesforce/schema/Player__c';
import NAME_FIELD from '@salesforce/schema/Player__c.Name';
import AGE_FIELD from '@salesforce/schema/Player__c.Age__c';
import EMAIL_FIELD from '@salesforce/schema/Player__c.Email__c';

export default class RecordEditForm extends LightningElement {

    objectApiName= PLAYER_OBJECT;

    nameField=NAME_FIELD;
    ageField=AGE_FIELD;
    EmailField=EMAIL_FIELD;
    playerId="Created player Id display here";

    handleSuccess(event){

        this.playerId= event.detail.id;

        const events = new showToastEvent({
            title :"Successful",
            message :"Player Created",
            variant :'success'
        });

        this.dispatchEvent(events);
    }

}