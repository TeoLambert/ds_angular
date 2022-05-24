import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ds_angular';

  stat1 : Statistique = {
    id:"id1",
    titre:"Statistique n°1",
    valeur:"Valeur 1"
  }

  stat2 : Statistique = {
    id:"id2",
    titre:"Statistique n°2",
    valeur:"Valeur 2"
  }


}
