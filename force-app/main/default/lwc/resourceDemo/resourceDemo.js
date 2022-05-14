import { LightningElement } from 'lwc';
import sffile from '@salesforce/resourceUrl/sffile';

export default class ResourceDemo extends LightningElement {

    players = [
        {
            id: "1",
            header: "Mabbape",
            src: sffile +'/sfnoob/Mabbape.jpg',
            description: "Dribbling King",
            href: "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9"
        },
        {
            id: "2",
            header: "Ronaldo",
            src: sffile +'/sfnoob/Ronaldo.jpg',
            description: "Header King",
            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo"
        },
        {
            id: "3",
            header: "Messi",
            src: sffile +'/sfnoob/Messi.jpg',
            description: "kick King",
            href: "https://en.wikipedia.org/wiki/Lionel_Messi"
        },
    ]

}