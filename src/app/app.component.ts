import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent, 
    MatSidenavModule, 
    RouterModule, 
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showFiller = false;
  showHeaderFooter: boolean = true;
  title = 'terapia-angular';  isCollapsed = false;

  
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.checkRoute();
    })
  }
  
  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed;
  }

  checkRoute() {
    const currentRoute = this.router.url;
    if (currentRoute === '/login') {
      this.showHeaderFooter = false;
    } else {
      this.showHeaderFooter = true;
    }
  }
}
