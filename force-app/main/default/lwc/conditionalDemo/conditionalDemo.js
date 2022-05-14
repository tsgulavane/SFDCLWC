import { LightningElement, track } from 'lwc';

export default class ConditionalDemo extends LightningElement {

    @track onclickchangeval ='Show';
    myTile ='I m showing this card';
    @track visibleCard =false;

    handleClick(event){
        const label = event.target.label;

        if(label === 'Show'){
            this.onclickchangeval='Hide';
            this.visibleCard =true;
        }else if(label === 'Hide'){
            this.onclickchangeval='Show';
            this.visibleCard =false;
        }

    }
}