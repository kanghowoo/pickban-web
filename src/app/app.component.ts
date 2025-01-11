import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { PickBanComponent } from "./pick-ban/pick-ban.component";
import { HomeComponent } from "./home/home.component";
import { filter } from 'rxjs/operators';
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NavbarComponent, PickBanComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pickban-web';
  showNavbar: boolean = true;
  showFooter: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
