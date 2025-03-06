import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

import { filter } from 'rxjs/operators';
import { FooterComponent } from "./layout/footer/footer.component";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pickban-web';
  showNavbar: boolean = true;
  showFooter: boolean = true;

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private authService: AuthService) {
    
    this.authService.getUser();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => {
        this.checkRoute();
      });
  }

  // checkRoute() {
  //   const childRoute = this.activatedRoute.firstChild;
  //   if (childRoute?.snapshot.data['showNavbar'] === true) {
  //     this.showNavbar = true;
  //   } else {
  //     this.showNavbar = false;
  //   }
  // }

  checkRoute() {
    const childrenRoutes = this.activatedRoute.children;
    this.showNavbar = childrenRoutes.some(route => route.snapshot.data['showNavbar'] === true);
    this.showFooter = childrenRoutes.some(route => route.snapshot.data['showFooter'] === true);
  }
  
}
