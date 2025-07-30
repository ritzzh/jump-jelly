import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JumpStart } from './jump-start';

const routes: Routes = [
  {
    path: '',
    component: JumpStart
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JumpStartRoutingModule { }
