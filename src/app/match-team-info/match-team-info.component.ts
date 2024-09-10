import { Component, Input, OnInit } from '@angular/core';
import { League } from '../league.model';
import { CommonModule } from '@angular/common';
import { Team } from '../team.model';
import { ResultService } from '../result.service';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../match.service';
import { LogoPathPipe } from "../logo-path.pipe";
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-match-team-info',
  standalone: true,
  imports: [CommonModule, LogoPathPipe, MatProgressSpinnerModule],
  templateUrl: './match-team-info.component.html',
  styleUrl: './match-team-info.component.css'
})
export class MatchTeamInfoComponent implements OnInit{
  @Input() team!: string;

  isBlueTeam:boolean = false;
  isRedTeam:boolean = false;
  isMatch:boolean = false;
  
  leagues$: Observable<League[]> = new Observable();
  leagues: League[] = [];

  teams: Team[] = [];

  selectedLeague: League | null = null;
  selectedTeam: Team | null = null;

  dropdownLeagueVisible = false;
  dropdownTeamVisible = false;

  constructor(
    private route: ActivatedRoute,
    private leagueService: LeagueService,
    private resultService: ResultService,
    private matchService: MatchService,
  ) {}

  ngOnInit(): void {
    if (this.team === 'blue') this.isBlueTeam = true;
    if (this.team === 'red') this.isRedTeam = true;

    this.leagues$ = this.leagueService.getLeagues();
    this.getLeaguesFromApi();

    const matchId = this.route.snapshot.paramMap.get('matchId');

    if (matchId) {
      this.isMatch = true;
      const selectedMatch = this.matchService.getMatch(matchId);
      this.selectedTeam = this.isBlueTeam? selectedMatch.home : selectedMatch.away;
      this.selectedLeague = this.leagues[this.selectedTeam.leagueId - 1];
    }

  }

  getLeaguesFromApi(): void {
    this.leagues$.subscribe(
      (data) => this.leagues = data
    )
  }

  onLeagueChange(league: League) {
    this.selectedLeague = league;

    if (this.selectedLeague) {
      const selectedLeague = this.leagues.find(league => league.id === this.selectedLeague?.id);
      this.teams = selectedLeague ? selectedLeague.teams : [];
    } else {
      this.teams = [];
    }

    this.selectedTeam = null;
    this.dropdownLeagueVisible = false;
  }

  onChangeTeam(team: Team) {
    this.selectedTeam = team;
    this.dropdownTeamVisible = false;    
    this.updateTeam(team);
  }

  updateTeam(team: Team) {
    if (this.isBlueTeam) {
      this.resultService.setBlueTeam(team);
    }
    
    if (this.isRedTeam) {
      this.resultService.setRedTeam(team);
    }
  }

  toggleLeagueDropdown() {
    this.dropdownLeagueVisible = true;
  }

  toggleTeamDropdown() {
    this.dropdownTeamVisible = true;
  }
}
