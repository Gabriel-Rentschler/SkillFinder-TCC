import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import FinderAs from '@salesforce/resourceUrl/FinderAs';

export default class Login extends NavigationMixin(LightningElement) {

  modelo = `${FinderAs}/EYassets/SF_logo.png`;

  @track showRequiredMessage = true;
  @track showSuccessMessage = false;

  handleLogin() {
    const emailInput = this.template.querySelector('input[name="email"]');
    const passwordInput = this.template.querySelector('input[name="password"]');

    if (!emailInput.value || !passwordInput.value) {
      this.showRequiredMessage = false;
    } else {
      this.showRequiredMessage = true;

       // Mostra a mensagem de sucesso
       this.showSuccessMessage = true;

       // Define um timeout para ocultar a mensagem após 5 segundos
       setTimeout(() => {
        this.showSuccessMessage = false;

                 // Crie a URL da página de filtro-tela
                 const url = '/skillfinder/filtrosf'; // Substitua pela URL correta

                 // Navegue para a nova URL
                 this[NavigationMixin.Navigate]({
                     type: 'standard__webPage',
                     attributes: {
                         url: url
                     }
                 });
    }, 2000);
  }
}
}