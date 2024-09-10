import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Match } from '../match.model';
import { RouterModule } from '@angular/router';
import { MatchService } from '../match.service';
import { LogoPathPipe } from "../logo-path.pipe";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule, LogoPathPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  matches: Match[] = this.matchService.getMatches();

  constructor(
    private matchService: MatchService,
  ) {}
}
