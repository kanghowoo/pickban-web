import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Match } from '../match.model';
import { DataService } from '../data.service';
import { League } from '../league.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  leagues: League[] = this.dataService.getLeagues();
  matches: Match[] = [
    {
      id: 1,
      home: this.leagues[0].teams[2],
      away: this.leagues[0].teams[1],
      schedule:'09월 07일 (토) 15:00',
      name: '플레이오프 4R',
    },
    {
      "id": 2,
      "home": this.leagues[0].teams[0],
      "away": this.leagues[0].teams[1],
      "schedule":'09월 08일 (일) 15:00',
      "name": '결승전'
    },
    {
      "id": 3,
      "home": this.leagues[0].teams[0],
      "away": this.leagues[0].teams[1],
      "schedule":'09월 08일 (일) 15:00',
      "name": '결승전'
    },
    {
      "id": 4,
      "home": this.leagues[0].teams[0],
      "away": this.leagues[0].teams[1],
      "schedule":'09월 08일 (일) 15:00',
      "name": '결승전'
    }
  ]

  constructor(
    private dataService: DataService,
  ) {}
}
