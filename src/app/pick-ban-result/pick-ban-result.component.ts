import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { ResultService } from '../result.service';
import { Team } from '../team.model';
import { Player } from '../player.model';
import { Ban } from '../ban.model';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-pick-ban-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pick-ban-result.component.html',
  styleUrl: './pick-ban-result.component.css',
})
export class PickBanOrderComponent implements OnInit {

  matchName: string = '';
  blueTeam: Team | null = null;
  redTeam: Team | null = null;

  constructor(
    private dataService: DataService,
    private resultService: ResultService,
    private route: ActivatedRoute,
    private matchService: MatchService,
  ) {}

  bluePlayers: Player[] = [];
  redPlayers: Player[] = [];
  
  blueBans: Ban[] = [];
  redBans: Ban[] = [];

  ngOnInit(): void {
    this.dataService.initializedBluePlayersSubject$.subscribe(players=> {
      this.bluePlayers = players;
    });

    this.dataService.initializedRedPlayersSubject$.subscribe(players => {
      this.redPlayers = players;
    });

    this.dataService.initializedBlueBansSubject$.subscribe(bans => {
      this.blueBans = bans;
    });
    
    this.dataService.initializedRedBansSubject$.subscribe(bans => {
      this.redBans = bans;
    });

    const matchId = this.route.snapshot.paramMap.get('matchId');
    if (matchId) {
      this.blueTeam = this.matchService.getMatch(matchId).home;
      this.redTeam = this.matchService.getMatch(matchId).away;
      this.matchName = this.matchService.getMatch(matchId).name;

    } else {
      this.resultService.matchNameSubject$.subscribe(name => {
        this.matchName = name;
      });
      this.resultService.blueTeamNameSubject$.subscribe(team => {
        this.blueTeam = team;
      });
      this.resultService.redTeamNameSubject$.subscribe(team => {
        this.redTeam = team;
      });      
    }

  }

}
