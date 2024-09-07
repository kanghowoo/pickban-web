import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Player } from './player.model';
import { Champion } from './champion.model';
import { Ban } from './ban.model';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private selectedBanSubject = new BehaviorSubject<Ban | null>(null);
  private selectedPlayerSubject = new BehaviorSubject<Player | null>(null);
  private selectedChampionSubject = new BehaviorSubject<Champion | null>(null);

  private selectedChampions: Champion[] = [];

  constructor() { }

  selectedBanSubject$ = this.selectedBanSubject.asObservable();
  selectedPlayer$ = this.selectedPlayerSubject.asObservable();
  selectedChampion$ = this.selectedChampionSubject.asObservable();

  selectBan(ban: Ban) {
    if (this.selectedPlayerSubject.value) {
      this.selectedPlayerSubject.next(null);
    }

    this.selectedBanSubject.next(ban);
  }

  selectPlayer(player: Player) {
    if (this.selectedBanSubject.value) {
      this.selectedBanSubject.next(null);
    }
    
    this.selectedPlayerSubject.next(player);
  }

  selectChampion(champion: Champion) {
    this.selectedChampionSubject.next(champion);
  }

  onBanSelect(ban: Ban) {
    const selectedChampion = this.selectedChampionSubject.value;
    if (selectedChampion) {
      
      if (ban.champion) {
        const previousChampion = ban.champion;
        previousChampion.assignedTo = undefined;
      }

      ban.champion = selectedChampion;
      selectedChampion.assignedTo = ban;

      this.addSelectedChampion(selectedChampion);

      this.selectedBanSubject.next(null);
      this.selectedChampionSubject.next(null);
    }
  }

  onChampionSelect(champion: Champion) {
    const selectedPlayer = this.selectedPlayerSubject.value;
    const selectedBan = this.selectedBanSubject.value;

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
      this.selectedPlayerSubject.next(null);
    }

    if (selectedBan) {

      if (selectedBan.champion) {
        const previousChampion = selectedBan.champion;
        previousChampion.assignedTo = undefined;
      }

      selectedBan.champion = champion;
      champion.assignedTo = selectedBan;

      this.selectedChampionSubject.next(null);
      this.selectedBanSubject.next(null);
    }

    this.addSelectedChampion(champion);

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

      this.addSelectedChampion(selectedChampion);

      this.selectedChampionSubject.next(null);
      this.selectedPlayerSubject.next(null);
    }  
  }

  isChampionAvailable(champion: Champion): boolean {
    return !champion.assignedTo;
  }

  initializeSelectedChampions() {
    this.selectedChampions.forEach(champion => {
      champion.assignedTo = undefined;
    });

    this.selectedBanSubject.next(null);
    this.selectedPlayerSubject.next(null);
    this.selectedChampionSubject.next(null);

    this.selectedChampions = [];
  }

  private addSelectedChampion(champion: Champion) {
    this.selectedChampions.push(champion);
  }
}
