import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../data.service';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-result-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './result-button.component.html',
  styleUrl: './result-button.component.css'
})
export class ResultButtonComponent {

  constructor(
    private dataService: DataService,
    private championService: ChampionService,
  ){}

  initializePlayers() {
    this.dataService.initializeAll();
    this.championService.resetChampionSelections();
  }

}
