import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ds_angular';

  constructor(public statService : StatistiqueService){}
  
  supprimerStatistique(stat : Statistique){
    let pos = this.statService.stats.indexOf(stat);
    if(pos !== -1)
      this.statService.stats.splice(pos,1);
  }

  }
  

  


