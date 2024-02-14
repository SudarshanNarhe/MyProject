import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: any;

  constructor() {
    this.movies = [
      { mid: 101, mname: 'Sairat', tprice: 250, rDate: '23/02/2024' },
      {
        mid: 102,
        mname: 'Halad Hasli Kunku Rusal',
        tprice: 300,
        rDate: '21/02/2024',
      },
      {
        mid: 103,
        mname: 'Tambyacha VishnuBala',
        tprice: 200,
        rDate: '20/02/2024',
      },
      { mid: 104, mname: 'Maza Chakula', tprice: 400, rDate: '12/02/2024' },
      { mid: 105, mname: 'Dhadakebaj', tprice: 450, rDate: '11/02/2024' },
      { mid: 106, mname: 'De Dakka', tprice: 300, rDate: '12/02/2024' },
      { mid: 107, mname: 'Chinami Pakharu', tprice: 250, rDate: '14/02/2024' },
    ];
  };

  getMovies(){
    return this.movies;
  }

  addMovie(movie:any){
    this.movies.push({
      mid:movie.mid,
      mname:movie.mname,
      tprice:movie.tprice,
      rDate:movie.rDate
    })
  }

  deleteMovie(mid:any){
    let i=0
      for(;i<this.movies.length;i++){
        if(this.movies[i].mid==mid){
          break;
        }
      }
      this.movies.splice(i,1)
  }

  UpdateMovie(movie:any){
    for(let i=0;i<this.movies.length;i++){
      if(this.movies[i].mid==movie.mid){
        this.movies[i].mname=movie.mname;
        this.movies[i].tprice=movie.tprice;
        this.movies[i].rDate=movie.rDate;
      }
    }
  }

}
