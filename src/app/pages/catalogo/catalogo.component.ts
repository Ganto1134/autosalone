import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  autoArr: iAuto[] = [];

  ngOnInit(){
    this.getAuto()
  }

  async getAuto(){
    const response = await fetch('../../../assets/db.json');
    const modelli = <iAuto[]> await response.json();
    this.autoArr = modelli;
  }
}
