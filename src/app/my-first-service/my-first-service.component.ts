import { Component, OnInit, inject } from '@angular/core';
import { MyLocalService } from '../my-local.service';

@Component({
  selector: 'app-my-first-service',
  standalone: true,
  imports: [],
  templateUrl: './my-first-service.component.html',
  styleUrl: './my-first-service.component.css'
})
export class MyFirstServiceComponent implements OnInit{

  employee :any
  
  Myser : MyLocalService=inject(MyLocalService)

  // constructor(public Myser:MyLocalService){

  // }
  ngOnInit(): void {
      this.employee=this.Myser.getEmployee();
      console.log(this.employee)
  }
    
}
