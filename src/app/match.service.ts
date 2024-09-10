import { Injectable, OnInit } from '@angular/core';
import { Match } from './match.model';
import { League } from './league.model';
import { Observable } from 'rxjs';
import { LeagueService } from './league.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  leagues$: Observable<League[]> = new Observable();
  leagues: League[] = [];
  
  matches: Match[] = [
    // {
    //   id: 1,
    //   home: this.leagues[0].teams[2],
    //   away: this.leagues[0].teams[1],
    //   schedule:'09월 07일 (토) 15:00',
    //   name: '플레이오프 4R',
    // },
    // {
    //   id: 2,
    //   home: this.leagues[0].teams[0],
    //   away: this.leagues[0].teams[1],
    //   schedule:'09월 08일 (일) 15:00',
    //   name: '결승전'
    // },
    // {
    //   id: 3,
    //   home: this.leagues[0].teams[0],
    //   away: this.leagues[0].teams[1],
    //   schedule:'09월 08일 (일) 15:00',
    //   name: '결승전'
    // },
    // {
    //   id: 4,
    //   home: this.leagues[0].teams[0],
    //   away: this.leagues[0].teams[1],
    //   schedule:'09월 08일 (일) 15:00',
    //   name: '결승전'
    // }
  ]  
  
  constructor(private leagueService: LeagueService) {
    this.leagues$ = this.leagueService.getLeagues();

    this.leagues$.subscribe(
      (data) => this.leagues = data
    );

  }

  //추후에 서버에서 가져올 수 있게 observable<any>로 변환
  getMatches(): Match[]{
    return this.matches;
  }

  getMatch(matchId: string): Match {
    return this.matches[Number(matchId) - 1];
  }

}
