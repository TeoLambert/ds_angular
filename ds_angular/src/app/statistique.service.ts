import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';
@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  stats: Statistique[] = [];

  constructor(){

    let stat1 : Statistique = {
      id:"id1",
      titre:"Statistique n°1",
      valeur:"Valeur 1"
    }

    let stat2 : Statistique = {
    id:"id2",
    titre:"Statistique n°2",
    valeur:"Valeur 2"
    }

    let stat3 : Statistique = {
      id:"id3",
      titre:"Statistique n°3",
      valeur:"Valeur 3"
      }

    this.stats.push(stat1, stat2);

    setTimeout(() =>{ this.stats.push(stat3) }, 5000);
  }
}