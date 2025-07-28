import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  constructor ( private router: Router) {

  }

  imageToPdf() {
    this.router.navigate(['pdf-core/img-to-pdf'])
  }

  plotChart() {
    this.router.navigate(['chart-core/plot-chart'])
  }

  extractFiles() {
    this.router.navigate(['file-core/extract-files'])
  }

  watchLocations() {
    this.router.navigate(['map-core/watch-locations'])
  }
}
