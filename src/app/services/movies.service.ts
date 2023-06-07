import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  PeliculaInfo, RespuestaPeliculas } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDhjMGRlYjQyMTlhMmNkN2UzY2E4NDEzNWVlMjUxMyIsInN1YiI6IjVmMDkzYTMxZTEwZjQ2MDAzYTM3MzlmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5NNg_cbO0ai7SlafwUHUYiQcBy2GUg3znS5zEsJMPBk'
    }
  };
  
  constructor(private http:HttpClient) { }

  getPeliculas(){
    return this.http.get<RespuestaPeliculas>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc',this.options)
  }

  getInfoPelicula(id: number){
    return this.http.get<PeliculaInfo>('https://api.themoviedb.org/3/movie/'
    + id +'?language=es', this.options)
  }
}
