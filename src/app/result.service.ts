import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private matchNameSubject = new BehaviorSubject<string>('');

  matchNameSubject$ = this.matchNameSubject.asObservable();

  constructor() { }

  setMatchName(name: string) {
    this.matchNameSubject.next(name);
  }

}
