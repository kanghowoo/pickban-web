import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-pick-ban-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pick-ban-result.component.html',
  styleUrl: './pick-ban-result.component.css',
})
export class PickBanOrderComponent implements OnInit {

  matchName: string = '';

  constructor(
    private dataService: DataService,
    private resultService: ResultService,
  ) {}

  bluePlayers = this.dataService.getBlueTeamPlayers();
  redPlayers = this.dataService.getRedTeamPlayers();
  
  blueBans = this.dataService.getBlueTeamBans();
  redBans = this.dataService.getRedTeamBans();

  ngOnInit(): void {
    this.resultService.matchNameSubject$.subscribe(name => {
      this.matchName = name;
    })
  }

}
