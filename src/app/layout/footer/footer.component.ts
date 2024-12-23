import { Component } from '@angular/core';
import { getYear } from 'date-fns';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: number;

  constructor() {
    this.year = getYear(new Date());
  }
}
