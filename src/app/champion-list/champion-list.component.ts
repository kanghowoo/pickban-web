import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Champion } from '../champion.model';
import { ChampionService } from '../champion.service';
import { debounceTime, startWith, Subject, switchMap } from 'rxjs';
import { ChampionSearchService } from '../champion-search.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-champion-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './champion-list.component.html',
  styleUrl: './champion-list.component.css',
})
export class ChampionListComponent implements OnInit {
  champions$ = this.championSearchService.champions$;

  selectedChampion: Champion | null = null;
  searchTerm = new Subject<string>();

  constructor(
    private championService: ChampionService,
    private championSearchService: ChampionSearchService,
  ) {}

  ngOnInit(): void {
    this.champions$ = this.searchTerm.pipe(
      startWith(''),
      debounceTime(100),
      switchMap(term => this.championSearchService.searchChampions(term))
    );

    this.searchTerm.next('');

    this.championService.selectedChampion$.subscribe(champion => {
      this.selectedChampion = champion;
    });
  }

  selectChampion(champion: Champion) {
    if (this.isChampionAvailable(champion)) {
      this.championService.selectChampion(champion);
      this.championService.onChampionSelect(champion);
    }
  }

  isChampionAvailable(champion: Champion): boolean {
    return this.championService.isChampionAvailable(champion);
  }

  isSelected(champion: Champion): boolean {
    return this.selectedChampion === champion 
            && this.isChampionAvailable(champion);
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      console.log('Search input value:', input.value); // 추가
      this.searchTerm.next(input.value);
    }
  }
  
}
