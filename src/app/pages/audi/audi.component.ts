import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {

  autoArr: iAuto[] = [];
  audiAuto: iAuto[] = [];

  ngOnInit(){
    this.getAuto().then(() => {
      this.audiAuto = this.audi();
    });
  }

  async getAuto(){
    const response = await fetch('../../../assets/db.json');
    const modelli = <iAuto[]> await response.json();
    this.autoArr = modelli;
  }

  audi(): iAuto[] {
    return this.autoArr.filter(auto => auto.brand === 'Audi')
   }

}
