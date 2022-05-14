import { LightningElement,track } from 'lwc';
import getAcounts from '@salesforce/apex/ComboBoxDemo.getAcounts';
import getContacts from '@salesforce/apex/ComboBoxDemo.getContacts';

const columns =[
    {label:'Contact Name', fieldName:'Name'},
    {label:'Contact Email', fieldName:'Email'}

]

export default class LwcComboboxwithDatatable extends LightningElement {
    @track value='';
    @track optionsArray=[];
    @track cardVisible = false;
    @track data=[];
    @track columns=columns;

    get options(){
        return this.optionsArray;
    }

 
    connectedCallback(){
        getAcounts().then(response => {
            let arr=[];
            for(var i=0;i<response.length ;i++){
                arr.push({ label: response[i].Name, value: response[i].Id});
            }
            this.optionsArray=arr;
            
        }
            )
    }

    handleChange(event){
        this.cardVisible =true;
        this.value = event.detail.value;


        getContacts({selectedAccountId : this.value})
        .then(result => {
            this.data=result;
        } )
        .catch(error=> {window.alert(error)
        })
 
    }

}