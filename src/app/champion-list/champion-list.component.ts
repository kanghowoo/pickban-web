import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Champion } from '../champion.model';
import { ChampionService } from '../champion.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-champion-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './champion-list.component.html',
  styleUrl: './champion-list.component.css'
})
export class ChampionListComponent implements OnInit {
  champions: Champion[] = [];
  selectedChampion: Champion | null = null;

  constructor(
    private championService: ChampionService,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.champions = this.dataService.getChampions();
    this.championService.selectedChampion$.subscribe(champion => {
      this.selectedChampion = champion;
    });
  }

  selectChampion(champion: Champion) {
    if (this.isChampionAvailable(champion)) {
      //this.selectedChampion = champion;
      this.championService.selectChampion(champion);
      this.championService.onChampionSelect(champion);
    }
    // this.selectedChampion = champion;
    // this.championSelected.emit(champion);
  }

  isChampionAvailable(champion: Champion): boolean {
    return this.championService.isChampionAvailable(champion);
  }

  isSelected(champion: Champion): boolean {
    return this.selectedChampion === champion 
            && this.isChampionAvailable(champion);
  }
}
