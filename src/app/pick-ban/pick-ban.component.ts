import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../player.model';
import { TeamPlayerComponent } from "../team-player/team-player.component";
import { ChampionListComponent } from "../champion-list/champion-list.component";
import { PickBanOrderComponent } from "../pick-ban-order/pick-ban-order.component";
import { DataService } from '../data.service';

@Component({
  selector: 'app-pick-ban',
  standalone: true,
  imports: [CommonModule, TeamPlayerComponent, ChampionListComponent, PickBanOrderComponent],
  templateUrl: './pick-ban.component.html',
  styleUrls: ['./pick-ban.component.css']
})
export class PickBanComponent {

  blueTeam = this.dataService.getBlueTeamPlayers();
  redTeam = this.dataService.getRedTeamPlayers();

  constructor(private dataService: DataService) {}

}
