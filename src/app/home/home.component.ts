import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutUsComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    cityname:string="Pune";

    num:number=45;

    getData(){
      return 'this is interpolation'
    }

    path:string='./assets/tree-736885_1280.jpg';

    name:string='Sudarshan'

    isdisable:boolean=true

    msg :string="Hi";

    onMyClick(){
      //console.log("This is Event")
     this.msg=' '+'Hi This is Event'    
    }

    // buttonReturn(){
    //   return 'This is return On button'
    // }

    data:string="";

}
