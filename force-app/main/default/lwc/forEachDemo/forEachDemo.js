import { LightningElement,wire,track } from 'lwc';
import getPlayerList from '@salesforce/apex/ForEachDemo.getPlayerList';

export default class ForEachDemo extends LightningElement {

@track data =[];

    @wire(getPlayerList)
    players;
}