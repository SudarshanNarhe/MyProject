import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-routes',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[MyHttpService,HttpClient],

  templateUrl: './emp-routes.component.html',
  styleUrl: './emp-routes.component.css'
})

export class EmpRoutesComponent implements OnInit{

  users : any[]=[];

  userdata:any
  
  constructor(public myClient : MyHttpService, public active:ActivatedRoute){

  //  console.log("inside constructor");
 
  }


  ngOnInit(): void {

    if (typeof localStorage !== 'undefined') {

    const storedData = localStorage.getItem('userData');
    if (storedData) {
     // console.log("In ifff")
      this.users = JSON.parse(storedData);

    } else {
     // console.log("In elsee")
      this.myClient.getData().subscribe((e: any) => {
        this.users = e.data;
        localStorage.setItem('userData', JSON.stringify(this.users));
        console.log(this.users);
      });
    }

  //  console.log("inside ngOnInit");

  // this.myClient.getData().subscribe(
  //   (e:any)=>{
  //      this.users=e.data
  //   }
  //   );

    let empcode=this.active.snapshot.params['id'];

     // console.log(empcode)
  
     for(let i=0;i<this.users.length;i++){

      if(empcode==this.users[i].id){
        // console.log("IN iffffff")
        this.userdata=this.users[i]
         console.log(this.userdata)
      }
    
  //    console.log(this.userdata)
  //   // console.log(this.user)

   }

  }
}

}
