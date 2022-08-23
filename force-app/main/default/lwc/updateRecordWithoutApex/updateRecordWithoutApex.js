import { LightningElement } from 'lwc';
import ID_Field from '@salesforce/schema/Account.Id';
import Name_Field from'@salesforce/schema/Account.Name';
import { updateRecord } from 'lightning/uiRecordApi';

export default class UpdateRecordWithoutApex extends LightningElement {

    idValue;
    nameValue;


    handleIdChange(event){
        this.idValue = event.target.value;

    }
 
    handleNameChange(event){
        this.nameValue=event.target.value;

    }

    handleUpdateAccount(){
        const fields ={};
        fields[ID_Field.fieldApiName] =this.idValue;
        fields[Name_Field.fieldApiName] =this.nameValue;

        const recordInput = {fields};

        updateRecord(recordInput).then(result=>{
            console.log("result: " +JSON.stringify(result))
        }).catch(error=>{
            console.log("Error Occured")
        })


    }

}