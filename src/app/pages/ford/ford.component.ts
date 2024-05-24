import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  autoArr: iAuto[] = [];
  fordAuto: iAuto[] = [];

  ngOnInit(){
    this.getAuto().then(() => {
      this.fordAuto = this.ford();
    });
  }

  async getAuto(){
    const response = await fetch('../../../assets/db.json');
    const modelli = <iAuto[]> await response.json();
    this.autoArr = modelli;
  }

  ford(): iAuto[] {
    return this.autoArr.filter(auto => auto.brand === 'Ford')
   }

}
