import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';


export default class CreateRecordwithoutApex extends LightningElement {

    accountId;
    name='';

    handleNameChange(event){
        this.name=event.target.value;

    }

    handleOnClick(){

        const fields ={};
        fields[NAME_FIELD.fieldApiName]=this.name;

        const recordInput ={apiName : ACCOUNT_OBJECT.objectApiName, fields};
        
        createRecord(recordInput).then(account=>{
            this.accountId=account.id;
        }).catch(error=>{
            console.error('Error Occured: '+JSON.stringify(error));


        })

    }
}