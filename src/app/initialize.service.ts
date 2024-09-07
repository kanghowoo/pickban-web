import { Injectable } from '@angular/core';
import { ResultService } from './result.service';
import { ChampionService } from './champion.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class InitializeService {

  constructor(
    private dataService: DataService,
    private championService: ChampionService,
    private resultService: ResultService,
  ) { }

  initializeAllComponent() {
    this.dataService.initializePlayersAndBans();
    this.championService.initializeSelectedChampions();
    this.resultService.initializeResult();
  }

  initializePickBan() {
    this.dataService.initializePlayersAndBans();
    this.championService.initializeSelectedChampions();
  }
}
