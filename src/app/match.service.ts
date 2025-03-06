import { Injectable, OnInit } from '@angular/core';
import { Match } from './match.model';
import { BehaviorSubject, catchError, filter, Observable, of, pipe, shareReplay, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { format } from 'date-fns';
import { League } from './league.model';
import { LeagueService } from './league.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = environment.apiUrl;

  private selectedMatchSubject = new BehaviorSubject<Match | undefined>(undefined);
  private matchesSubject = new BehaviorSubject<Match[]>([]);

  selectedMatch$ = this.selectedMatchSubject.asObservable();
  matches$ = this.matchesSubject.asObservable();

  leagues: League[] | null = [];

  localMatches: Match[] = [];
  localLeagues: League[] = [];
  
  constructor(private http: HttpClient, private leagueService: LeagueService) {
    this.leagueService.leagues$.subscribe(
      leagues => {
        this.leagues = leagues;
    });

    this.initializeLocalMatches(); 
  }

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/matches`);
  }

  getMatchesByDateRange(startDate: string, endDate: string):Observable<Match[]> {
    const params = new HttpParams()
    .set('startDate', startDate)
    .set('endDate', endDate);

    return this.http.get<Match[]>(`${this.apiUrl}/matches`, { params });
  }

  getPredictableMatches(): void {
    const nowDate: string = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
    const maxDate: string = '2999-12-31T23:59:59';

    const params = new HttpParams()
      .set('startDate', nowDate)
      .set('endDate', maxDate);

      this.http.get<Match[]>(`${this.apiUrl}/matches`, { params }).pipe(
        tap(matches => {
          this.matchesSubject.next(matches);
        }),
        catchError(error => {
          this.matchesSubject.next(this.localMatches);
          return of(this.localMatches);
        })
      ).subscribe();
  }

  getMatchById(matchId: string): void {
    this.http.get<Match>(`${this.apiUrl}/matches/${matchId}`).pipe(
      tap(match => {
        this.selectedMatchSubject.next(match);
      }),
      catchError(error => {
        const localMatch = this.localMatches[Number(matchId) - 1];
        this.selectedMatchSubject.next(localMatch);
        return of(localMatch);
      })
    ).subscribe();
  }

  initializeLocalMatches() {
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
    ];

    this.localMatches = [
      {
        id: 1,
        homeTeam: this.localLeagues![0].teams[1],
        awayTeam: this.localLeagues![1].teams[0],
        schedule:'2024-11-02 23:00:00',
        name: '월드 챔피언십<br>결승전',
      },         
    ];
  }
  
}
