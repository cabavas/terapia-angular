import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navigate(): void {
    this.router.navigate(['/home']);
  }

  logout() {

  }
}
