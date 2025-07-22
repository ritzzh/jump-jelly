import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotCharts } from './plot-charts/plot-charts';

const routes: Routes = [
  {
    path: 'plot-chart',
    component: PlotCharts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartCoreRoutingModule { }
