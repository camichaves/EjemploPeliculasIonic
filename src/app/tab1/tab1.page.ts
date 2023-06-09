import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { register } from 'swiper/element/bundle';
import { AlertController, LoadingController } from '@ionic/angular';
register();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  arregloPeliculas: Pelicula[] = [];
  constructor(private peliculasService:MoviesService, 
    private alertController: AlertController,
    private loadingController: LoadingController) {
  }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Cargando peliculas...',
    });

    loading.present();
    this.peliculasService.getPeliculas().subscribe(respuesta =>{
      console.log(respuesta.results)
      this.arregloPeliculas=respuesta.results
      loading.dismiss();
    })
  }

  async verInfoPelicula(id: number) {
    this.peliculasService.getInfoPelicula(id).subscribe(async respuestaApi =>{
      console.log(respuestaApi)
      const alert = await this.alertController.create({
        header: respuestaApi.title,
        subHeader: respuestaApi.original_title,
        message: respuestaApi.overview,
        buttons: ['OK', {
          text: "Agregar a Favoritas",
          handler: () => {
            console.log("Holis")
            this.peliculasService.agregarPeliculaFavoritas(respuestaApi)
          }
        }],
      });
  
      await alert.present();
    })
  }

}
