import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip'
import { CommonModule } from '@angular/common';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-jump-start',
  imports: [RouterModule, CommonModule, DragDropModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule, MatDivider],
  templateUrl: './jump-start.html',
  styleUrl: './jump-start.scss'
})
export class JumpStart {

  constructor(private router : Router) {

  }


fullText = 'Convert images to PDF, create charts, extract files, explore maps, compare JSON, generate QR codes, and more – all in one place!';

ngOnInit() {

}

login() {
  // Navigate to login or open a dialog
  console.log('Redirect to login');
}

tools = [
    { name: 'Image to PDF', icon: 'picture_as_pdf', action: () => this.imageToPdf(), active: true},
    { name: 'Play with Charts', icon: 'bar_chart', action: () => this.plotChart(), active: true},
    { name: 'Extract Files', icon: 'unarchive', action: () => this.extractFiles(), active: false},
    { name: 'Play with Maps', icon: 'map', action: () => this.watchLocations(), active: true},
    { name: 'Time Converter', icon: 'schedule', action: () => this.timeConverter(), active: false},
    { name: 'Current Epoch', icon: 'av_timer', action: () => this.showEpoch(), active: false},
    { name: 'JSON Compare', icon: 'compare_arrows', action: () => this.jsonCompare(), active: false},
    { name: 'Text to QR', icon: 'qr_code', action: () => this.textToQr(), active: false},
    { name: 'Image Tools', icon: 'crop', action: () => this.imageTools(), active: false},
    { name: 'Video Crop', icon: 'video_file', action: () => this.videoCrop(), active: false},
    { name: 'Extra Tool 1', icon: 'extension', action: () => this.extraTool(), active: false},
    { name: 'Extra Tool 2', icon: 'build', action: () => this.extraTool(), active: false},
    { name: 'Extra Tool 3', icon: 'info', action: () => this.extraTool(), active: false}
  ];

  currentSlide = 0;
  toolsPerPage = 12;

  paginatedTools() {
    const start = this.currentSlide * this.toolsPerPage;
    return this.tools.slice(start, start + this.toolsPerPage);
  }

  nextSlide() {
    if ((this.currentSlide + 1) * this.toolsPerPage < this.tools.length) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  totalPages(): any[] {
  return Array(Math.ceil(this.tools.length / this.toolsPerPage));
}

goToSlide(index: number): void {
  this.currentSlide = index;
}

  extraTool() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tools, event.previousIndex, event.currentIndex);
  }

  timeConverter() {}
  showEpoch() {}
  jsonCompare() {}
  textToQr() {}
  imageTools() {}
  videoCrop() {}

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
