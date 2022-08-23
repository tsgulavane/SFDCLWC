import { LightningElement,track,wire} from 'lwc';
import getPlayerList from '@salesforce/apex/WireDemoForPlayers.getPlayerList';

const columns=[
    {label:'Name', fieldName :"Name"},
    {label:"Player Record ID", fieldName : "Id"}
];

export default class Pwiredemocomponent extends LightningElement {
    @track columns = columns;
    @track data=[];

    @wire(getPlayerList)
    gettingPlayers({data, error}){
        if(data){
            this.data=data;
        }else if(error){
            console.log('Error Occured');
        }

    }


}