import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoworderPage } from './showorder.page';

const routes: Routes = [
  {
    path: '',
    component: ShoworderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoworderPageRoutingModule {}
