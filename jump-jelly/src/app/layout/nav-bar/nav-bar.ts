import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../../core/services/common-service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule, MatToolbarModule, MatDividerModule, RouterModule, MatButtonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  isMenuOpen = false;
  isLoggedIn: boolean = true;

  constructor ( private commonService : CommonService, private router: Router) {
    console.log(this.isLoggedIn)
   commonService.$isLoggedIn.subscribe(status => {
    this.isLoggedIn = status
   })
   console.log(this.isLoggedIn)
  }

  redirectToLogin() {
    this.router.navigate(['/login'])
  }

  getMenuSelection(selection: string) {
    switch ( selection ) {
      case 'logout': {
        this.commonService.$isLoggedIn.next(false);
        this.router.navigate(['/login']);
        break;
      }
      case 'accounts': {
        this.router.navigate(['/accounts']);
        break;
      }
      case 'settings': {
        this.router.navigate(['/settings']);
        break;
      }
      default: break;
    } 
  }
}
