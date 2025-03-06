import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent {
  posts = [
    { title: '2025 LCK 럽 PO 작업 티켓 예매', author: 'NAVER', date: '02.07', views: 2746, comments: 32 },
    { title: '소문이 사실이었네 ㅋㅋ', author: '산뜻한 모...', date: '1시간 전', views: 129, comments: 0 },
    { title: '지금 남아있는 1000만 이벤트 요약.jpg', author: '아무것도 모...', date: '1시간 전', views: 25, comments: 0 },
    { title: '카리나 1++', author: '산뜻한 모...', date: '1시간 전', views: 198, comments: 1 },
    { title: '후에이 신스킨 언제 나오려나', author: '푸훗잉', date: '1시간 전', views: 51, comments: 4 },
  ];
}
