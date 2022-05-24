import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';
import { statBack } from './models/apiTypes';
@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  public stats: Statistique[] = [];

  constructor(private http : HttpClient){
    this.http.get<statBack[]>(" https://stats.naminilamy.fr").subscribe(
      res => {
        for (const elem of res) {
          this.stats.push({
            id: elem.id,
            titre: elem.title,
            valeur: elem.value
          });
        }
      }
    );
  }

 
}
