import { LightningElement,track, wire } from 'lwc';
import getlistofcustomers from '@salesforce/apex/wireDemoClass.getlistofcustomers'


const columns = [
    {label: "FullName", fieldName:"FullName__c"},
    {label: "Age", fieldName:"Age__c"},   
];
export default class WireDemo extends LightningElement {

    @track columns =columns;
    @track data =[];

    @wire(getlistofcustomers)
    wiredcustomers({data, error}){

        if(data){
            this.data=data;
        }else if(error){
            console.log("Error Occured");

        }

    }

 


}