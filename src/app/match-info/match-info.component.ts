import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ResultService } from '../result.service';
import { DataService } from '../data.service';
import { Team } from '../team.model';
import { League } from '../league.model';

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.css'
})
export class MatchInfoComponent {
  leagues = this.dataService.getLeagues();

  selectedBlueTeamLeague: League | null = null;
  blueTeams: Team[] = [];
  selectedBlueTeam: Team | null = null;

  selectedRedTeamLeague: League | null = null;
  redTeams: Team[] = [];
  selectedRedTeam: Team | null = null;

  @ViewChild('matchNameInput') matchNameInputRef!: ElementRef<HTMLInputElement>;
  nameMaxLength:  number = 20;

  isMatchNameFocused = false;
  matchName: string = '';

  constructor(
    private resultService: ResultService,
    private dataService: DataService,
  ) {}

  onBlueSideLeagueChange() {
    if (this.selectedBlueTeamLeague) {
      const selectedLeague = this.leagues.find(league => league.id === this.selectedBlueTeamLeague?.id);
      this.blueTeams = selectedLeague ? selectedLeague.teams : [];
    } else {
      this.blueTeams = [];
    }

    this.selectedBlueTeam = null;
  }

  onRedSideLeagueChange() {
    if (this.selectedRedTeamLeague) {
      const selectedLeague = this.leagues.find(league => league.id === this.selectedRedTeamLeague?.id);
      this.redTeams = selectedLeague ? selectedLeague.teams : [];
    } else {
      this.redTeams = [];
    }

    this.selectedRedTeam = null;
  }

  updateBlueSideTeam() {
    this.resultService.setBlueTeam(this.selectedBlueTeam);
  }

  updateRedSideTeam() {
    this.resultService.setRedTeam(this.selectedRedTeam);
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
