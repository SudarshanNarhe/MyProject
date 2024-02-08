import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipeDemoPipe } from '../pipe-demo.pipe';
import { CubePipe } from '../cube.pipe';
import { ConvertStringToDatePipe } from '../convert-string-to-date.pipe';

@Component({
  selector: 'app-compopipe',
  standalone: true,
  imports: [CommonModule,PipeDemoPipe,CubePipe,ConvertStringToDatePipe],
  templateUrl: './compopipe.component.html',
  styleUrl: './compopipe.component.css'
})
export class CompopipeComponent {

      msg:string='India is my Country'

      amount:number=780000;

      today=new Date();

    show(...a:number[]){
      for(let i=0;i<a.length;i++){
        console.log(a[i])
      }
    }

    base:number=2;
    expo:number=3;

    employee:any[]

  constructor(){
    this.employee=[
      {code:'code 101',name:'yash',gender:'Male',anualSalary:5501.1,DOB:'5/24/1991'},
      {code:'code 102',name:'sara',gender:'Female',anualSalary:9500.52,DOB:'4/8/2000'},
      {code:'code 103',name:'Ram',gender:'Male',anualSalary:10000,DOB:'12/16/1990'},
      {code:'code 104',name:'Sita',gender:'Female',anualSalary:15000.1234,DOB:'1/25/1995'}
    ]
  }

}
