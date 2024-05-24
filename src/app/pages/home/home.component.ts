import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  autoArr: iAuto[] = [];
  randomAuto: iAuto[] = [];

  ngOnInit(){
    this.getAuto().then(() => {
      this.randomAuto = this.getRandomAuto();
    });
  }

  async getAuto(){
    const response = await fetch('../../../assets/db.json');
    const modelli = <iAuto[]> await response.json();
    this.autoArr = modelli;
  }

  getRandomAuto(): iAuto[] {
    const shuffled = [...this.autoArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }
}
