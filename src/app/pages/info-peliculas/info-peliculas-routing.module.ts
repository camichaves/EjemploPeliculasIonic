import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPeliculasPage } from './info-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPeliculasPageRoutingModule {}
