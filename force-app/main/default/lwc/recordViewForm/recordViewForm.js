import { LightningElement,api } from 'lwc';
import PLAYER_OBJECT from '@salesforce/schema/Player__c';
import NAME_FIELD from '@salesforce/schema/Player__c.Name';
import EMAIL_FIELD from '@salesforce/schema/Player__c.Email__c';
import YOEXP_FIELD from '@salesforce/schema/Player__c.Year_Of_Experience__c';


export default class RecordViewForm extends LightningElement {
    nameField= NAME_FIELD;
    emailField =EMAIL_FIELD;
    yearOfExp = YOEXP_FIELD;
  //  objectApiName = PLAYER_OBJECT;

    @api recordId;
    @api objectApiName;
}