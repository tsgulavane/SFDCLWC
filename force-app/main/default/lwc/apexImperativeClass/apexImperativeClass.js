import { LightningElement, track } from 'lwc';
import getlistbyImperative from '@salesforce/apex/ImperativeDemoClass.getlistbyImperative';

const columns =[
    {label:'Customer Id', fieldName: 'Id'},
    {label:'Customer Name', fieldName:'FullName__c'}
]

export default class ApexImperativeClass extends LightningElement {

    @track columns = columns;
    @track data =[];

    connectedCallback(){
        getlistbyImperative()
            .then(
                result => {this.data=result}
            ).catch(
                Error => {console.debug('Error Occured')
            })
    }

}