import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ban } from '../ban.model';
import { ChampionService } from '../champion.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-ban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-ban.component.html',
  styleUrl: './team-ban.component.css'
})
export class TeamBanComponent implements OnInit {
  bans: Ban[] = [];
  @Input() team!: string;
  
  isBlueTeam: boolean = false;
  isRedTeam: boolean = false;
  selectedBan: Ban | null = null;
  
  constructor(
    private championService: ChampionService,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.isBlueTeam = this.team === 'blue';
    this.isRedTeam = this.team === 'red';

    if (this.isBlueTeam) {
      this.dataService.initializedBlueBansSubject$.subscribe(bans => {
        this.bans = bans;
      })
    }

    if (this.isRedTeam) {
      this.dataService.initializedRedBansSubject$.subscribe(bans => {
        this.bans = bans;
      })
    }

    this.championService.selectedBanSubject$.subscribe(ban => {
      this.selectedBan = ban;
    })
  }

  selectBan(ban: Ban) {
    this.championService.selectBan(ban);
    this.championService.onBanSelect(ban);
  }

  isSelectedBlue(ban: Ban) {
    return ban === this.selectedBan && this.isBlueTeam;
  }

  isSelectedRed(ban: Ban) {
    return ban === this.selectedBan && this.isRedTeam;
  }
}
