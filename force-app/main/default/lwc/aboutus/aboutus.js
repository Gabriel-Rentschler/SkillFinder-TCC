import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; // Certifique-se de importar corretamente
import FinderAs from '@salesforce/resourceUrl/FinderAs';

export default class Skillfinder extends NavigationMixin(LightningElement) {

    sflogo = `${FinderAs}/EYassets/SF_logo.png`;

    home() {
        const url = '/skillfinder'; 
              
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: url
            }
        });
    }
    aboutus() {           
        const url = '/skillfinder/aboutus'; 
              
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: url
            }
        });
    }
}