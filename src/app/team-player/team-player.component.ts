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

  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.championService.selectedPlayer$.subscribe(player => {
      this.selectedPlayer = player;
    });
  }

  selectPlayer(player: Player) {
    this.championService.selectPlayer(player);
    this.championService.onPlayerSelect(player);
  }

  isSelectedBlue(player: Player): boolean {
    return player === this.selectedPlayer && this.team === 'blue';
  }

  isSelectedRed(player: Player): boolean {
    return player === this.selectedPlayer && this.team === 'red';
  }
}
