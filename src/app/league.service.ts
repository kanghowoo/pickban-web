import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { League } from './league.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { Match } from './match.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private apiUrl = environment.apiUrl + "/leagues";
  
  private localLeagues: League[] = [];

  private leaguesSubject = new BehaviorSubject<League[]>([]);

  leagues$ = this.leaguesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initializeLocalLeagues();
  }

  getLeagues(): void {
    this.http.get<League[]>(`${this.apiUrl}`).pipe(
      tap(leagues => {
        this.leaguesSubject.next(leagues);
      }),
      catchError(err => {
        this.leaguesSubject.next(this.localLeagues);
        return of(this.localLeagues);
      }),
    ).subscribe();
  }

  initializeLocalLeagues() {
    this.localLeagues = [
      { id: 1, slug: 'LCK', fullName: 'League of Legends Champions Korea',
        teams: [
          {id: 1, slug: 'GEN', fullName: 'Gen.G Esports', leagueId: 1},
          {id: 2, slug: 'T1', fullName: 'T1', leagueId: 1},
          {id: 3, slug: 'HLE', fullName: 'Hanwha Life Esports', leagueId: 1},
          {id: 4, slug: 'DK', fullName: 'Dplus KIA', leagueId: 1},
          {id: 5, slug: 'KT', fullName: 'kt Rolster', leagueId: 1},
          {id: 6, slug: 'KDF', fullName: 'KWANGDONG FREECS', leagueId: 1},
          {id: 7, slug: 'BNK', fullName: 'BNK FearX', leagueId: 1},
          {id: 8, slug: 'NS', fullName: 'Nongshim RedForce', leagueId: 1},
          {id: 9, slug: 'DRX', fullName: 'DRX', leagueId: 1},
          {id: 10, slug: 'BRO', fullName: 'OKSavingsBank BRION', leagueId: 1},
        ]
      },
      { id: 2, slug: 'LPL', fullName: 'League of Legends Pro League',
        teams: [
          {id: 11, slug: 'BLG', fullName: 'Bilibili Gaming DreamSmart', leagueId: 2},
          {id: 12, slug: 'WBG', fullName: 'Weibo Gaming TapTap', leagueId: 2}
        ]
      }       
    ]
  }

}
