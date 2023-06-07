import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPeliculasPageRoutingModule } from './info-peliculas-routing.module';

import { InfoPeliculasPage } from './info-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPeliculasPageRoutingModule
  ],
  declarations: [InfoPeliculasPage]
})
export class InfoPeliculasPageModule {}
