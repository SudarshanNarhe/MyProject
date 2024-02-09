import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.css'
})
export class DirectiveDemoComponent {
      show:boolean=false;
      age :any;
      color:string='';
      num1:any;
      num2:any;

      num3:any;

      num5:any;

      num6:any;

      day:number=0;

      num7:number[]=[1,2,3,4,5,6,7]

      items:string[]=['Apple','Banana','Mango','Papaya'];

     employee: any []

     movie:any[]

     student:any[]

    constructor(){
        this.employee=[
          {eid:101,ename:'Sudarshan',salary:78000},
          {eid:102,ename:'Suraj',salary:87000},
          {eid:103,ename:'Yogesh',salary:92000},
          {eid:104,ename:'Pritam',salary:56000},
          {eid:105,ename:'Abhi',salary:67000}
        ]

        this.movie=[
          {title:'Sairat',dir:'Nagraj',price:340,releaseDate:'03/02/2024'},
          {title:'Sher Shivraj',dir:'Digpal',price:450,releaseDate:'05/02/2024'},
          {title:'12th Fail',dir:'Chopra',price:500,releaseDate:'01/02/2024'},
          {title:'RRR',dir:'Rajmauli',price:400,releaseDate:'01/02/2024'},
          {title:'Pawankhind',dir:'Digpal',price:560,releaseDate:'07/02/2024'}
        ]

        this.student=[
          {sid:11,sname:'Sudarshan',marks:70},
          {sid:12,sname:'Pritam',marks:80},
          {sid:13,sname:'Snehal',marks:40},
          {sid:14,sname:'Harshada',marks:50},
          {sid:15,sname:'Abhi',marks:55},
          {sid:16,sname:'Suraj',marks:60},
          {sid:17,sname:'Yogesh',marks:90},
        ]
    };

    // for latest angular 17
        num11:any

        num12:any;
        num13:any;

        num14:any
        num15:any
        num16:any;

        color1:string='';

}
