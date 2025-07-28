import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalLayout } from '../layout/global-layout/global-layout';

const routes: Routes = [
  {
    path: '',
    component: GlobalLayout,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../modules/dashboard/dashboard-module').then(m => m.DashboardModule)
      },
      {
        path: 'pdf-core',
        loadChildren: () => import('../modules/pdf-core/pdf-core-module').then(m => m.PdfCoreModule)
      },
      {
        path: 'chart-core',
        loadChildren: () => import('../modules/chart-core/chart-core-module').then(m => m.ChartCoreModule)
      },
      {
        path: 'file-core',
        loadChildren: () => import('../modules/file-core/file-core-module').then(m => m.FileCoreModule)
      },
      {
        path: 'map-core',
        loadChildren: () => import('../modules/map-core/map-core-module').then(m => m.MapCoreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingRoutingModule { }
