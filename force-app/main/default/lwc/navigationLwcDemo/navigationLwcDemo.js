import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationLwcDemo extends NavigationMixin(LightningElement) {

    handleNavigation(){
        
        //Navigate to Tab
        // this[NavigationMixin.Navigate]({
        //     type:'standard_navItemPage',
        //     attributes:{
        //         apiName:'Player_Explorer',
        //     },
        // })

        // Navigate to Account Object home page
        // this[NavigationMixin.Navigate]({
        //     type:'standard__objectPage',
        //     attributes:{
        //         objectApiName:'Account',
        //         actionName:'home'
        //     },  
        // })

        //Navigate to url
        // this[NavigationMixin.Navigate]({
        //     "type": "standard__webPage",
        //     "attributes": {
        //         "url": "https://trailhead.salesforce.com/"
        //     }
        // })

        this[NavigationMixin.Navigate]({
                type:'standard__namedPage',
                attributes:{
                    pageName:'filePreview',
                },
                state:{
                    recordIds:'0695j000009Ne49AAC,0695j0000075KlFAAU',
                    selectedRecordId:'0695j0000075KlFAAU'
                }
            })
      

    }
}