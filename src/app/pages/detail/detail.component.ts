import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  autoArr: iAuto[] = [];
  currentAuto!: iAuto;

  constructor(
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.getAuto();
    this.route.params.subscribe(params => {
      const model = params['model'];
      const autoTrovata = this.autoArr.find(auto => auto.model === model);

      if (autoTrovata) {
        this.currentAuto = autoTrovata;
      } else {
        console.error('auto non trovata');
      }
    });
  }

  async getAuto(){
    const response = await fetch('../../../assets/db.json');
    const modelli = <iAuto[]> await response.json();
    this.autoArr = modelli;
  }
}
