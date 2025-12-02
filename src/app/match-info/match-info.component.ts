import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ResultService } from '../result.service';
import { MatchService } from '../match.service';
import { ActivatedRoute } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatchTeamInfoComponent } from "../match-team-info/match-team-info.component";
import { TextPipe } from '../text.pipe';

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule,
    NgSelectModule, MatchTeamInfoComponent, TextPipe],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.css'
})
export class MatchInfoComponent implements OnInit {
  @ViewChild('matchNameInput') matchNameInputRef!: ElementRef<HTMLInputElement>;
  nameMaxLength:  number = 20;

  match$ = this.matchService.selectedMatch$;

  isMatchNameFocused = false;
  matchName: string | '' = '';

  isMatch:boolean = false;
  isHomeTeamBlue = true;

  constructor(
    private resultService: ResultService,
    private route: ActivatedRoute,
    private matchService: MatchService,
  ) {}

  ngOnInit(): void {
    const matchId = this.route.snapshot.paramMap.get('matchId');

    if (matchId) {
      this.isMatch = true;
      // this.match$.subscribe(
      //   match => {
      //     this.matchName = match?.name ?? '';
      //   }
      // );

    }
  }

  onMathchNameFocus() {
    this.isMatchNameFocused = true;
  }

  onMatchNameBlur() {
    this.isMatchNameFocused = false;
    this.updateMatchName();
  }

  updateMatchName() {
    this.resultService.setMatchName(this.matchName!);
    this.matchNameInputRef?.nativeElement.blur();
  }

  preventBlur(event: MouseEvent) {
    event.preventDefault();  // blur 이벤트 방지
  }

  clearMatchName() {
    this.matchName = '';
    this.matchNameInputRef?.nativeElement.focus();   
  }

  onSwapIconClick() {
    this.isMatch = true;

    this.isHomeTeamBlue = !this.isHomeTeamBlue;
  }  

}
