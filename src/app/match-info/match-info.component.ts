import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.css'
})
export class MatchInfoComponent {
  leagues = [
    { name: 'LCK', teams: ['T1', 'GEN', 'DK', 'KT', 'HLE', 'DRX', 'FOX', 'BRO', 'NS', 'KDF']},
  ];

  selectedBlueTeamLeague: string = '';
  blueTeams: string[] = [];
  selectedBlueTeam: string = '';

  selectedRedTeamLeague: string = '';
  redTeams: string[] = [];
  selectedRedTeam: string = '';

  @ViewChild('matchNameInput') matchNameInputRef!: ElementRef<HTMLInputElement>;

  isMatchNameFocused = false;
  matchName: string = '';

  maxLength:  number = 20;

  constructor(
    private resultService: ResultService,
  ) {}

  onLeagueChange1() {
    if (this.selectedBlueTeamLeague) {
      const selectedLeague = this.leagues.find(c => c.name === this.selectedBlueTeamLeague);
      this.blueTeams = selectedLeague ? selectedLeague.teams : [];
    } else {
      this.blueTeams = [];
    }

    this.selectedBlueTeam = '';
  }

  onLeagueChange2() {
    if (this.selectedRedTeamLeague) {
      const selectedLeague = this.leagues.find(c => c.name === this.selectedRedTeamLeague);
      this.redTeams = selectedLeague ? selectedLeague.teams : [];
    } else {
      this.redTeams = [];
    }

    this.selectedRedTeam = '';
  }

  onMathchNameFocus() {
    this.isMatchNameFocused = true;
  }

  onMatchNameBlur() {
    this.isMatchNameFocused = false;
    this.updateMatchName();
  }

  updateMatchName() {
    this.resultService.setMatchName(this.matchName);
    this.matchNameInputRef?.nativeElement.blur();
  }

  preventBlur(event: MouseEvent) {
    event.preventDefault();  // blur 이벤트 방지
  }

  clearMatchName() {
    this.matchName = '';
    this.matchNameInputRef?.nativeElement.focus();   
  }
}
