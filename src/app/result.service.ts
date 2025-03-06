import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private matchNameSubject = new BehaviorSubject<string>('');
  private blueTeamSubject = new BehaviorSubject<Team | undefined>(undefined);
  private redTeamSubject = new BehaviorSubject<Team | undefined>(undefined);

  private blueTeamNameSubject = new BehaviorSubject<string>("");
  private redTeamNameSubject = new BehaviorSubject<string>("");

  matchNameSubject$ = this.matchNameSubject.asObservable();
  blueTeamSubject$ = this.blueTeamSubject.asObservable();
  redTeamSubject$ = this.redTeamSubject.asObservable();

  blueTeamNameSubject$ = this.blueTeamNameSubject.asObservable();
  redTeamNameSubject$ = this.redTeamNameSubject.asObservable();

  constructor() { }

  setMatchName(name: string | '') {
    this.matchNameSubject.next(name);
  }

  setBlueTeam(team: Team | undefined) {
    this.blueTeamSubject.next(team);
  }

  setRedTeam(team: Team | undefined) {
    this.redTeamSubject.next(team);
  }

  setBlueTeamName(name: string) {
    this.blueTeamNameSubject.next(name);
  }

  setRedTeamName(name: string) {
    this.redTeamNameSubject.next(name);
  }

  initializeResult() {
    this.matchNameSubject.next('');
    this.blueTeamSubject.next(undefined);
    this.redTeamSubject.next(undefined);
  }

}
