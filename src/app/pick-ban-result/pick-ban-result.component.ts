import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../player.model';
import { ChampionService } from '../champion.service';
import { Champion } from '../champion.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pick-ban-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pick-ban-result.component.html',
  styleUrl: './pick-ban-result.component.css',
})
export class PickBanOrderComponent implements OnInit {

  constructor(
    private championService: ChampionService,
    private dataService: DataService,
  ) {}
  
  selectedPlayer: Player | null = null;
  selectedChampion: Champion | null = null;

  bluePlayers = this.dataService.getBlueTeamPlayers();
  redPlayers = this.dataService.getRedTeamPlayers();
  
  blueBans = this.dataService.getBlueTeamBans();
  redBans = this.dataService.getRedTeamBans();

  ngOnInit(): void {
    this.championService.selectedChampion$.subscribe(champion => {
      this.selectedChampion = champion;
    });

    this.championService.selectedPlayer$.subscribe(player => {
      this.selectedPlayer = player;
    });
  }

}
