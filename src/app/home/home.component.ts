import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Match } from '../match.model';
import { RouterModule } from '@angular/router';
import { MatchService } from '../match.service';
import { LogoPathPipe } from "../logo-path.pipe";
import { DatePipe } from "../date.pipe";
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule,
    LogoPathPipe, DatePipe, MatProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  matches$: Observable<Match[]> = new Observable();

  constructor(
    private matchService: MatchService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.matches$ = this.matchService.getPredictableMathces();
  }

  onMatchClick(match: Match): void {
    this.matchService.getMatchById(match.id.toString());
    this.router.navigate(['/simulation/matches/', match.id]);
  }
}
