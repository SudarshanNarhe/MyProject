import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-emp-routes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [MyHttpService, HttpClient],

  templateUrl: './emp-routes.component.html',
  styleUrl: './emp-routes.component.css',
})
export class EmpRoutesComponent implements OnInit {
  users: any[] = [];

  userdata: any;

  constructor(
    public myClient: MyHttpService,
    public active: ActivatedRoute,
    public r: Router
  ) {
    //  console.log("inside constructor");
  }

  ngOnInit(): void {
    //     if (typeof localStorage !== 'undefined') {
    //     const storedData = localStorage.getItem('userData');
    //     if (storedData) {
    //       this.users = JSON.parse(storedData);
    //     }
    //      else {
    //       this.myClient.getData().subscribe((e: any) => {
    //         this.users = e.data;
    //         localStorage.setItem('userData', JSON.stringify(this.users));
    //         console.log(this.users);
    //       });
    //     }
    //       let empcode=this.active.snapshot.params['id'];
    //      for(let i=0;i<this.users.length;i++){
    //       if(empcode==this.users[i].id){
    //         this.userdata=this.users[i]
    //          console.log(this.userdata)
    //       }
    //    }
    //   }
  }

  show() {
    this.myClient.getData().subscribe((e: any) => {
      this.users = e.data;
      localStorage.setItem('userData', JSON.stringify(this.users));
      console.log(this.users);
    });

    let empcode = this.active.snapshot.params['id'];

    for (let i = 0; i < this.users.length; i++) {
      if (empcode == this.users[i].id) {
        this.userdata = this.users[i];
        console.log(this.userdata);
      }
    }
  }

  GoBack() {
    this.r.navigate(['Data']);
  }
}
