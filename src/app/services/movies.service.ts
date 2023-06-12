import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  PeliculaInfo, RespuestaPeliculas } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private _storage: Storage | null = null;
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDhjMGRlYjQyMTlhMmNkN2UzY2E4NDEzNWVlMjUxMyIsInN1YiI6IjVmMDkzYTMxZTEwZjQ2MDAzYTM3MzlmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5NNg_cbO0ai7SlafwUHUYiQcBy2GUg3znS5zEsJMPBk'
    }
  };

  peliculasfavoritas: PeliculaInfo[] = []
  
  constructor(private http:HttpClient, private storage: Storage) {
    this.init();
  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  getPeliculas(){
    return this.http.get<RespuestaPeliculas>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc',this.options)
  }

  getInfoPelicula(id: number){
    return this.http.get<PeliculaInfo>('https://api.themoviedb.org/3/movie/'
    + id +'?language=es', this.options)
  }

  async agregarPeliculaFavoritas(pelicula: PeliculaInfo){

    // asegurar que la pelicula no esta en el arreglo.
    
    this.peliculasfavoritas = await this._storage?.get('peliculasFavoritas')
    this.peliculasfavoritas.push(pelicula);
    this._storage?.set("peliculasFavoritas", this.peliculasfavoritas);
  }

  async obtenerFavoritas(){
    const peliculasFavoritas = await this._storage?.get('peliculasFavoritas');
    return peliculasFavoritas
  }
}
