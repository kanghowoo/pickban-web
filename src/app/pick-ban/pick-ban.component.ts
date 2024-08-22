import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPlayerComponent } from "../team-player/team-player.component";
import { ChampionListComponent } from "../champion-list/champion-list.component";
import { PickBanOrderComponent } from "../pick-ban-order/pick-ban-order.component";
import { DataService } from '../data.service';
import { TeamBanComponent } from "../team-ban/team-ban.component";
import { MatchInfoComponent } from "../match-info/match-info.component";

@Component({
  selector: 'app-pick-ban',
  standalone: true,
  imports: [CommonModule, TeamPlayerComponent, ChampionListComponent, 
    PickBanOrderComponent, TeamBanComponent, MatchInfoComponent],
  templateUrl: './pick-ban.component.html',
  styleUrls: ['./pick-ban.component.css']
})
export class PickBanComponent {

  bluePlayers = this.dataService.getBlueTeamPlayers();
  redPlayers = this.dataService.getRedTeamPlayers();

  blueBans = this.dataService.getBlueTeamBans();
  redBans = this.dataService.getRedTeamBans();

  constructor(private dataService: DataService) {}

}
