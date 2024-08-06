import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pick-ban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pick-ban.component.html',
  styleUrls: ['./pick-ban.component.css']
})
export class PickBanComponent implements OnInit {
  champions: any[] = [];
  selectedChampion: any = null;
  blueTeam = [
    { name: 'Rengar', image: 'assets/rengar.png' },
    { name: 'Renata', image: 'assets/renata.png' },
    { name: 'Neeko', image: 'assets/neeko.png' },
    { name: 'player4', image: 'assets/default.png' },
    { name: 'player5', image: 'assets/default.png' },
  ];

  redTeam = [
    { name: 'Renekton', image: 'assets/renekton.png' },
    { name: 'Leona', image: 'assets/leona.png' },
    { name: 'Rumble', image: 'assets/rumble.png' },
    { name: 'player9', image: 'assets/default.png' },
    { name: 'player10', image: 'assets/default.png' },
  ];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.champions = this.dataService.getChampions();
  }

  selectChampion(champion: any) {
    this.selectedChampion = champion;
  }
}
