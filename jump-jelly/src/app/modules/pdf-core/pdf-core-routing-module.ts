import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgToPdf } from './img-to-pdf/img-to-pdf';

const routes: Routes = [
  {
    path: 'img-to-pdf',
    component: ImgToPdf
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfCoreRoutingModule { }
