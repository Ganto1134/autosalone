import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {

  autoArr: iAuto[] = [];
  fiatAuto: iAuto[] = [];

  ngOnInit(){
    this.getAuto().then(() => {
      this.fiatAuto = this.fiat();
    });
  }

  async getAuto(){
    const response = await fetch('../../../assets/db.json');
    const modelli = <iAuto[]> await response.json();
    this.autoArr = modelli;
  }

  fiat(): iAuto[] {
    return this.autoArr.filter(auto => auto.brand === 'Fiat')
   }

}
