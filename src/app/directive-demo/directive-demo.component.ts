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

}
