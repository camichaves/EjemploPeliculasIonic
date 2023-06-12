import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { PeliculaInfo } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
register();
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private movieService: MoviesService) {}

  arregloPeliculas: PeliculaInfo[] =[]
  
  async ionViewWillEnter(){
    this.arregloPeliculas = await this.movieService.obtenerFavoritas()
    
  }

}
