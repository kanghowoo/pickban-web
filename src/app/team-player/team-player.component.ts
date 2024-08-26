import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../player.model';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-team-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-player.component.html',
  styleUrl: './team-player.component.css'
})
export class TeamPlayerComponent implements OnInit {
  @Input() players: Player[] = [];
  @Input() team!: string;

  selectedPlayer: Player | null = null;

  isBlueTeam: boolean = false;
  isRedTeam : boolean = false;

  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.championService.selectedPlayer$.subscribe(player => {
      this.selectedPlayer = player;
    });

    this.isBlueTeam = this.team === 'blue';
    this.isRedTeam = this.team === 'red';
  }

  selectPlayer(player: Player) {
    this.championService.selectPlayer(player);
    this.championService.onPlayerSelect(player);
  }

  isSelectedBlue(player: Player): boolean {
    return player === this.selectedPlayer && this.isBlueTeam;
  }

  isSelectedRed(player: Player): boolean {
    return player === this.selectedPlayer && this.isRedTeam;
  }

  getTeamPlayerNumber(seq: Number): string {
    if (this.isRedTeam) return 'R' + seq;
    if (this.isBlueTeam) return 'B' + seq;
    
    return '';
  }

}
