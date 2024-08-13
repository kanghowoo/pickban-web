import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from './player.model';
import { Champion } from './champion.model';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private champions: Champion[] = [];
  private players: Player[] = [];

  private selectedPlayerSubject = new BehaviorSubject<Player | null>(null);
  private selectedChampionSubject = new BehaviorSubject<Champion | null>(null);

  constructor() { }

  selectedPlayer$ = this.selectedPlayerSubject.asObservable();
  selectedChampion$ = this.selectedChampionSubject.asObservable();

  selectPlayer(player: Player) {
    this.selectedPlayerSubject.next(player);
  }

  selectChampion(champion: Champion) {
    this.selectedChampionSubject.next(champion);
  }

  onChampionSelect(champion: Champion) {
    const selectedPlayer = this.selectedPlayerSubject.value;
    if (selectedPlayer) {
      // 만약 현재 선택된 플레이어가 이미 챔피언을 가지고 있다면, 이전 챔피언의 할당 해제
      if (selectedPlayer.champion) {
        const previousChampion = selectedPlayer.champion;
        previousChampion.assignedTo = undefined; // 이전 챔피언의 할당 해제
      }

      // 현재 선택된 플레이어에게 새로운 챔피언 할당
      selectedPlayer.champion = champion;
      selectedPlayer.image = "/assets/img/champion/centered/" + champion.id + ".jpg";
      champion.assignedTo = selectedPlayer; // 새로운 챔피언의 할당

      // 상태 업데이트
      this.selectedChampionSubject.next(null);
      this.selectedPlayerSubject.next(null); // 플레이어 선택 해제
    }
  }

  onPlayerSelect(player: Player) {
    const selectedChampion = this.selectedChampionSubject.value;
    if (selectedChampion) {

      if (player.champion) {
        const previousChampion = player.champion;
        previousChampion.assignedTo = undefined;
      }

      player.champion = selectedChampion;
      player.image = "/assets/img/champion/centered/" + selectedChampion.id + ".jpg";
      selectedChampion.assignedTo = player;

      this.selectedChampionSubject.next(null);
      this.selectedPlayerSubject.next(null);
    }
    // if (this.selectedChampion) {

    //   if (player.champion) {
    //     const previousChampion = player.champion;
    //     previousChampion.assignedTo = undefined;
    //   }

    //   player.champion = this.selectedChampion;
    //   player.image = "/assets/img/champion/centered/" + this.selectedChampion.id + ".jpg";
    //   this.selectedChampion.assignedTo = player;

    //   this.selectedChampion = null;
    //   console.log("champion select first good work");
    // }    
  }

  isChampionAvailable(champion: Champion): boolean {
    return !champion.assignedTo;
  }
}
