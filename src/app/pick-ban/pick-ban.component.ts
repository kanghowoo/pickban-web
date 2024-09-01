import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPlayerComponent } from "../team-player/team-player.component";
import { ChampionListComponent } from "../champion-list/champion-list.component";
import { PickBanOrderComponent } from "../pick-ban-result/pick-ban-result.component";
import { DataService } from '../data.service';
import { TeamBanComponent } from "../team-ban/team-ban.component";
import { MatchInfoComponent } from "../match-info/match-info.component";
import { ResultButtonComponent } from "../result-button/result-button.component";
import { Player } from '../player.model';
import { Ban } from '../ban.model';

@Component({
  selector: 'app-pick-ban',
  standalone: true,
  imports: [CommonModule, TeamPlayerComponent, ChampionListComponent,
    PickBanOrderComponent, TeamBanComponent, MatchInfoComponent, ResultButtonComponent],
  templateUrl: './pick-ban.component.html',
  styleUrls: ['./pick-ban.component.css']
})
export class PickBanComponent {
}
