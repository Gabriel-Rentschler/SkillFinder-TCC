import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; // Certifique-se de importar corretamente
import FinderAs from '@salesforce/resourceUrl/FinderAs';

export default class HomeSF extends NavigationMixin(LightningElement) {
    sflogo = `${FinderAs}/EYassets/SF_logo.png`;
    icon1 = `${FinderAs}/EYassets/icon1.png`;
    icon2 = `${FinderAs}/EYassets/icon2.png`;
    icon3 = `${FinderAs}/EYassets/icon3.png`;
    icon4 = `${FinderAs}/EYassets/icon4.png`;
    icon5 = `${FinderAs}/EYassets/icon5.png`;
    icon6 = `${FinderAs}/EYassets/icon6.png`;
    icon7 = `${FinderAs}/EYassets/icon7.png`;
    icon8 = `${FinderAs}/EYassets/icon8.png`;
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
    login() {           
        const url = '/skillfinder/loginsf'; 
              
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: url
            }
        });
    }
}
    
    
