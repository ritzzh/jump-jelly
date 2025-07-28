import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchLocations } from './watch-locations/watch-locations';

const routes: Routes = [
  {
    path: 'watch-locations',
    component: WatchLocations
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapCoreRoutingModule { }
