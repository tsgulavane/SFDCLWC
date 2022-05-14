import { LightningElement, track} from 'lwc';
import getAcounts from '@salesforce/apex/ComboBoxDemo.getAcounts';

export default class LwcComboboxDemo extends LightningElement {

    @track value ='';
    @track accOptions=[];

    get options(){
        return this.accOptions;
    }

    connectedCallback(){
        getAcounts().then(result => {
            let arr = [];
            for(var i=0; i<result.length; i++){
                arr.push({label : result[i].Name, value : result[i].Id})
            }
            this.accOptions=arr;


        })
    }
   
    handleChange(event){
        this.value = event.detail.value;
    }
}