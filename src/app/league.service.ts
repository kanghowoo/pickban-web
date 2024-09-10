import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { League } from './league.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private apiUrl = environment.apiUrl;

  leagues: League[] = [
    // { id: 1, slug: 'LCK', fullName: 'League of Legends Champions Korea',
    //   teams: [
    //     {id: 1, slug: 'GEN', fullName: 'Gen.G Esports', leagueId: 1},
    //     {id: 2, slug: 'T1', fullName: 'T1', leagueId: 1},
    //     {id: 3, slug: 'HLE', fullName: 'Hanwha Life Esports', leagueId: 1},
    //     {id: 4, slug: 'DK', fullName: 'Dplus KIA', leagueId: 1},
    //     {id: 5, slug: 'KT', fullName: 'kt Rolster', leagueId: 1},
    //     {id: 6, slug: 'KDF', fullName: 'KWANGDONG FREECS', leagueId: 1},
    //     {id: 7, slug: 'BNK', fullName: 'BNK FearX', leagueId: 1},
    //     {id: 8, slug: 'NS', fullName: 'Nongshim RedForce', leagueId: 1},
    //     {id: 9, slug: 'DRX', fullName: 'DRX', leagueId: 1},
    //     {id: 10, slug: 'BRO', fullName: 'OKSavingsBank BRION', leagueId: 1},
    //   ]
    // }
  ];

  constructor(private http: HttpClient) {}

  getLeagues(): Observable<League[]> {
    const cachedLeagues = localStorage.getItem('leagues');
    const cachedTime = localStorage.getItem('leaguesTimestamp')
    const duration = 1000 * 60 * 60 * 24;

    if (cachedLeagues && this.isExpired(cachedTime, duration)) {
      return of(this.leagues);
    } else {
      return this.http.get<League[]>(`${this.apiUrl}/leagues`).pipe(
        tap(leagues => this.leagues = leagues),
        catchError((error) => {
          console.error('Error fetching leagues:', error);
          return throwError(() => new Error('Failed to fetch leagues')); // 에러 발생 시 처리
        })
      );      
    }
  }

  private isExpired(cachedTime: string | null, ttl: number): boolean {
    if (cachedTime) {
      return Date.now() - parseInt(cachedTime) > ttl;
    }

    return false;
  }
}
