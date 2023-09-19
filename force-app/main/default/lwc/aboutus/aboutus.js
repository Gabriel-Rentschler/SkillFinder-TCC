import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; // Certifique-se de importar corretamente
import FinderAs from '@salesforce/resourceUrl/FinderAs';

export default class Skillfinder extends NavigationMixin(LightningElement) {

    sflogo = `${FinderAs}/EYassets/SF_logo.png`;
}