import { Injectable, OnInit } from '@angular/core';
import { Match } from './match.model';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = environment.apiUrl;

  matches: Match[] | null = null;
  
  private matchCache: { [key: string]: Observable<Match> } = {}; // 캐시로 Observable을 저장
  private selectedMatch: Match | null = null;
  
  constructor(private http: HttpClient) {
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

  getPredictableMathces(): Observable<Match[]> {
    const nowDate: string = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
    const maxDate: string = '2999-12-31T23:59:59';

    const params = new HttpParams()
      .set('startDate', nowDate)
      .set('endDate', maxDate);

    if (this.matches) {
      return of(this.matches);
    } else {
      return this.http.get<Match[]>(`${this.apiUrl}/matches`, { params }).pipe(
        tap(matches => this.matches = matches)
      );
    }
    
  }

  getMatchById(matchId: string): Observable<Match> {
    if (this.matchCache[matchId]) {
      return this.matchCache[matchId];
    }

    console.log("match api");

    const result = this.http.get<Match>(`${this.apiUrl}/matches/${matchId}`).pipe(
      tap(match => this.selectedMatch = match),
      shareReplay(1)
    );

    this.matchCache[matchId] = result;
    return result;
  }
  
}
