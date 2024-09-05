import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showHeaderFooter: boolean = true;
  title = 'terapia-angular';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.checkRoute();
    })
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
