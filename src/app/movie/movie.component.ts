import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

export class MovieComponent implements OnInit{

    movies:any;
    isUpdate=false;
    isEdit=false;
    constructor(public Mser:MovieService, public fb:FormBuilder){

    }

    movieForm=this.fb.group({
      mid:[,Validators.required],
      mname:[,Validators.required],
      tprice:[,Validators.required],
      rDate:[,Validators.required]
    })

    ngOnInit(): void {

        this.getAllMovies();
    }

    getAllMovies(){
      this.movies=this.Mser.getMovies();
    }

    SaveData(){

      let movie=this.movieForm.value
      if(this.isUpdate==false){
        this.Mser.addMovie(movie);
      }
      else{
        this.Mser.UpdateMovie(movie)
        this.isUpdate=false;
      }
      this.clearform();
    }

    clearform(){
      this.movieForm.reset();
    }

    EditMovie(mo:any){
        this.isUpdate=true;
        this.isEdit=true;
        this.movieForm.setValue({
          mid:mo.mid,
          mname:mo.mname,
          tprice:mo.tprice,
          rDate:mo.rDate
        })
    }

    DeleteMovie(id:any){
      let result=confirm("Do you want to delete "+id+" ?")
      if(result==true){
        this.Mser.deleteMovie(id)
        this.getAllMovies();
      }
    }

    toggleForm() {
      this.isEdit = !this.isEdit;
      this.clearform();
    }
  
    
}
