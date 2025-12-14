import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { ResultService } from '../result.service';
import { Team } from '../team.model';
import { Player } from '../player.model';
import { Ban } from '../ban.model';
import { ActivatedRoute } from '@angular/router';
import { LogoPathPipe } from '../logo-path.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pick-ban-result',
  standalone: true,
  imports: [CommonModule, LogoPathPipe],
  templateUrl: './pick-ban-result.component.html',
  styleUrl: './pick-ban-result.component.css',
})
export class PickBanOrderComponent implements OnInit {
  matchName: string = '';
  blueTeam$: Observable<Team | undefined> = new Observable<Team | undefined>();
  redTeam$: Observable<Team | undefined> = new Observable<Team | undefined>();

  blueTeamName: string = '';
  redTeamName: string = '';

  isMatch: boolean = false;

  logoImgErrorMap: { [slug: string]: boolean } = {};

  constructor(
    private dataService: DataService,
    private resultService: ResultService,
    private route: ActivatedRoute
  ) {}

  bluePlayers: Player[] = [];
  redPlayers: Player[] = [];

  blueBans: Ban[] = [];
  redBans: Ban[] = [];

  ngOnInit(): void {
    this.dataService.initializedBluePlayersSubject$.subscribe((players) => {
      this.bluePlayers = players;
    });

    this.dataService.initializedRedPlayersSubject$.subscribe((players) => {
      this.redPlayers = players;
    });

    this.dataService.initializedBlueBansSubject$.subscribe((bans) => {
      this.blueBans = bans;
    });

    this.dataService.initializedRedBansSubject$.subscribe((bans) => {
      this.redBans = bans;
    });

    this.resultService.matchNameSubject$.subscribe((name) => {
      this.matchName = name;
    });

    this.blueTeam$ = this.resultService.blueTeamSubject$;
    this.redTeam$ = this.resultService.redTeamSubject$;

    this.resultService.blueTeamNameSubject$.subscribe((name) => {
      this.blueTeamName = name;
    });

    this.resultService.redTeamNameSubject$.subscribe((name) => {
      this.redTeamName = name;
    });

    const matchId = this.route.snapshot.paramMap.get('matchId');
    if (matchId != null) {
      this.isMatch = true;
    }
  }

  handleImgError(slug: string) {
    this.logoImgErrorMap[slug] = true;
  }
}
