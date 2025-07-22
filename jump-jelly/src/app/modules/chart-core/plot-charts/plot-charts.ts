import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';



@Component({
  selector: 'app-plot-charts',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule, BaseChartDirective, ReactiveFormsModule],
  templateUrl: './plot-charts.html',
  styleUrl: './plot-charts.scss'
})
export class PlotCharts {
    form: FormGroup;
    isBrowser: boolean;
    chartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Dataset',
        borderColor: '#3f51b5',
        fill: false,
        tension: 0.3
      }
    ]
  };

  chartType: ChartType = 'line';
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.form = this.fb.group({
      chartType: 'line',
      xAxis: [''],
      yAxis: [''],
    });
  }

  onSubmit(): void {
    this.chartType = this.form.value.chartType;
    const x = this.form.value.xAxis.split(',').map((v: string) => v.trim());
    const y = this.form.value.yAxis.split(',').map((v: string) => +v);

    this.chartData = {
      labels: x,
      datasets: [
        {
          data: y,
          label: 'Manual Input',
          borderColor: '#4caf50',
          fill: false,
          tension: 0.3
        }
      ]
    };

    console.log(this.chartData)
  }

}
