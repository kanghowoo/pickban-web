import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  Inject,
} from '@angular/core';
import { League } from '../league.model';
import { CommonModule } from '@angular/common';
import { Team } from '../team.model';
import { ResultService } from '../result.service';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../match.service';
import { LogoPathPipe } from '../logo-path.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Match } from '../match.model';
import { FormsModule } from '@angular/forms';
import { LeagueService } from '../league.service';
import { map } from 'rxjs';
import { HideMissingDirective } from '../shared/directives/hide-missing.directive';

@Component({
  selector: 'app-match-team-info',
  standalone: true,
  imports: [
    CommonModule,
    LogoPathPipe,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule,
    HideMissingDirective,
  ],
  templateUrl: './match-team-info.component.html',
  styleUrl: './match-team-info.component.css',
})
export class MatchTeamInfoComponent implements OnInit {
  @Input() team!: string;
  @Input() isHomeTeamBlue!: boolean;

  @ViewChild('teamNameInput') teamNameInputRef!: ElementRef<HTMLInputElement>;
  nameMaxLength: number = 10;

  isBlueSide: boolean = false;
  isRedSide: boolean = false;

  isMatch: boolean = false;

  leagues: League[] | null = [];

  teams: Team[] = [];

  //selectedLeague: League | undefined;
  selectedTeam: Team | undefined;
  selectedMatch: Match | undefined;

  dropdownLeagueVisible = false;
  dropdownTeamVisible = false;

  isTeamNameFocused = false;
  teamName: string | '' = '';

  match$ = this.matchService.selectedMatch$;
  leagues$ = this.leagueService.leagues$;
  selectedLeague$ = this.leagues$.pipe(
    map((leagues) =>
      leagues.find((league) => league.id === this.selectedTeam?.leagueId)
    )
  );

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    private leagueService: LeagueService,
    private resultService: ResultService,
    private matchService: MatchService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.team === 'blue') {
      this.isBlueSide = true;
    }
    if (this.team === 'red') {
      this.isRedSide = true;
    }

    this.getLeaguesFromApi();

    const matchId = this.route.snapshot.paramMap.get('matchId');

    if (matchId) {
      this.match$.subscribe((match) => {
        this.selectedMatch = match;
        this.selectedTeam = this.isBlueSide ? match?.homeTeam : match?.awayTeam;
        //this.selectedLeague = this.leagues!.find(league => league.id === this.selectedTeam?.leagueId);

        this.resultService.setBlueTeam(match?.homeTeam);
        this.resultService.setRedTeam(match?.awayTeam);
        this.resultService.setMatchName(match?.name ?? '');
      });

      this.isMatch = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['isHomeTeamBlue'] &&
      !changes['isHomeTeamBlue'].isFirstChange()
    ) {
      const homeTeam = this.selectedMatch?.homeTeam;
      const awayTeam = this.selectedMatch?.awayTeam;

      let blueSideTeam: Team | undefined;
      let redSideTeam: Team | undefined;

      if (this.isBlueSide) {
        if (this.isHomeTeamBlue) {
          blueSideTeam = homeTeam;
        } else {
          blueSideTeam = awayTeam;
        }

        this.selectedTeam = blueSideTeam;
        this.resultService.setBlueTeam(blueSideTeam);
      } else {
        if (this.isHomeTeamBlue) {
          redSideTeam = awayTeam;
        } else {
          redSideTeam = homeTeam;
        }

        this.selectedTeam = redSideTeam;
        this.resultService.setRedTeam(redSideTeam);
      }

      this.selectedLeague$ = this.leagues$.pipe(
        map((leagues) =>
          leagues.find((league) => league.id === this.selectedTeam?.leagueId)
        )
      );
      this.cdr.detectChanges();
    }
  }

  getLeaguesFromApi(): void {
    this.leagueService.leagues$.subscribe((leagues) => {
      this.leagues = leagues;
    });
  }

  // onLeagueChange(league: League) {
  //   this.selectedLeague = league;

  //   if (this.selectedLeague) {
  //     const selectedLeague = this.leagues!.find(league => league.id === this.selectedLeague?.id);
  //     this.teams = selectedLeague ? selectedLeague.teams : [];
  //   } else {
  //     this.teams = [];
  //   }

  //   this.selectedTeam = undefined;
  //   this.dropdownLeagueVisible = false;
  // }

  onChangeTeam(team: Team) {
    this.selectedTeam = team;
    this.dropdownTeamVisible = false;
    this.updateTeam(team);
  }

  updateTeam(team: Team) {
    if (this.isBlueSide) {
      this.resultService.setBlueTeam(team);
    }

    if (this.isRedSide) {
      this.resultService.setRedTeam(team);
    }
  }

  toggleLeagueDropdown() {
    this.dropdownLeagueVisible = true;
  }

  toggleTeamDropdown() {
    this.dropdownTeamVisible = true;
  }

  onTeamNameFocus() {
    this.isTeamNameFocused = true;
  }

  onTeamNameBlur() {
    this.isTeamNameFocused = false;
    this.updateTeamName();
  }

  preventBlur(event: MouseEvent) {
    event.preventDefault(); // blur 이벤트 방지
  }

  clearTeamName() {
    this.teamName = '';
    this.teamNameInputRef?.nativeElement.focus();
  }

  setTeamNamePlaceholder(): string {
    if (this.isBlueSide) return '블루팀 이름 입력하기(10자)';
    else return '레드팀 이름 입력하기(10자)';
  }

  updateTeamName() {
    if (this.isBlueSide) {
      this.resultService.setBlueTeamName(this.teamName);
    } else {
      this.resultService.setRedTeamName(this.teamName);
    }

    this.teamNameInputRef?.nativeElement.blur();
  }

  updateBlueTeamName(name: string) {}

  updateRedTeamName(name: string) {
    this.resultService.setRedTeamName(name);
  }
}
