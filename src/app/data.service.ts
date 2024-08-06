import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  champions = [
    // 예시 데이터, 실제 데이터로 교체
    { name: 'Garen', img: 'path_to_garen_image' },
    { name: 'Renekton', img: 'path_to_renekton_image' },
    // ... 추가 챔피언 데이터
  ];

  getChampions() {
    return this.champions;
  }
}
