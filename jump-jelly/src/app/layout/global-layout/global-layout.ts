import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";
import { Footer } from "../footer/footer";
import { DashboardRoutingModule } from "../../modules/dashboard/dashboard-routing-module";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-global-layout',
  imports: [NavBar, DashboardRoutingModule, MatToolbarModule],
  templateUrl: './global-layout.html',
  styleUrl: './global-layout.scss'
})
export class GlobalLayout {

}
