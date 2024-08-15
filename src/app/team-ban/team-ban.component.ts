import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ban } from '../ban.model';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-team-ban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-ban.component.html',
  styleUrl: './team-ban.component.css'
})
export class TeamBanComponent implements OnInit {
  @Input() bans: Ban[] = [];
  @Input() team!: string;
  
  selectedBan: Ban | null = null;
  
  constructor(
    private championService: ChampionService,
  ) {}

  ngOnInit(): void {
    this.championService.selectedBanSubject$.subscribe(ban => {
      this.selectedBan = ban;
    })
  }

  selectBan(ban: Ban) {
    this.championService.selectBan(ban);
    this.championService.onBanSelect(ban);
  }

  isSelectedBlue(ban: Ban) {
    return ban === this.selectedBan && this.team === "blue";
  }

  isSelectedRed(ban: Ban) {
    return ban === this.selectedBan && this.team === "red";
  }
}
