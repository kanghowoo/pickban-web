import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private matchNameSubject = new BehaviorSubject<string>('');
  private blueTeamSubject = new BehaviorSubject<Team | null>(null);
  private redTeamSubject = new BehaviorSubject<Team | null>(null);

  matchNameSubject$ = this.matchNameSubject.asObservable();
  blueTeamNameSubject$ = this.blueTeamSubject.asObservable();
  redTeamNameSubject$ = this.redTeamSubject.asObservable();

  constructor() { }

  setMatchName(name: string) {
    this.matchNameSubject.next(name);
  }

  setBlueTeam(team: Team | null) {
    this.blueTeamSubject.next(team);
  }

  setRedTeam(team: Team | null) {
    this.redTeamSubject.next(team);
  }

}
