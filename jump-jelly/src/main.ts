import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// ✅ Import Chart.js core
import { Chart } from 'chart.js';

// ✅ Register ALL standard chart components
import {
  LineController,
  BarController,
  RadarController,
  DoughnutController,
  PieController,
  PolarAreaController,
  BubbleController,
  ScatterController,

  LineElement,
  BarElement,
  PointElement,
  ArcElement,

  CategoryScale,
  LinearScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  LogarithmicScale,

  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  // Controllers
  LineController,
  BarController,
  RadarController,
  DoughnutController,
  PieController,
  PolarAreaController,
  BubbleController,
  ScatterController,

  // Elements
  LineElement,
  BarElement,
  PointElement,
  ArcElement,

  // Scales
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  LogarithmicScale,

  // Plugins
  Filler,
  Legend,
  Title,
  SubTitle,
  Tooltip
);

// ✅ Bootstrap Angular app
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
