import { Component, OnInit, Input } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  @Input() stat! : Statistique;

  constructor(private statService: StatistiqueService) { }

  ngOnInit(): void {
    
  }

}
