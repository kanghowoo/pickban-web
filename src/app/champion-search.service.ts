import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Champion } from './champion.model';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionSearchService {
  private championsSubject = new BehaviorSubject<Champion[]>([]);
  champions$ = this.championsSubject.asObservable();

  constructor(private dataService: DataService) {
    this.loadChampions();
  }

  private loadChampions() {
    const champions = this.dataService.getChampionsSortedByName();
    this.championsSubject.next(champions);
  }

  searchChampions(term: string): Observable<Champion[]> {
    if (!term.trim()) {
      return of(this.championsSubject.value);
    }

    return this.champions$.pipe(
      map(champions => {
        const filtered = champions.filter(champion =>
          champion.name.includes(term)
        );

        return filtered;
      })
    );
  }

}
