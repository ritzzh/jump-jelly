import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileCore } from './file-core';
import { ExtractFiles } from './extract-files/extract-files';

const routes: Routes = [
  {
    path: 'extract-files',
    component: ExtractFiles
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileCoreRoutingModule { }
