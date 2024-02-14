import { Component, OnInit, inject } from '@angular/core';
import { MyLocalService } from '../my-local.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-first-service',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './my-first-service.component.html',
  styleUrl: './my-first-service.component.css',
})

export class MyFirstServiceComponent implements OnInit {
  employee: any;

  isUpdate=false;

  // Myser: MyLocalService = inject(MyLocalService);

  constructor(public Myser:MyLocalService, public fb:FormBuilder){

  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
   
    this.employee = this.Myser.getEmployee();
    
  }

  empform=this.fb.group({
    eid:[,Validators.required],
    ename:[,Validators.required],
    salary:[,Validators.required]
  })

  SaveData(){

      let emp=this.empform.value

      if(this.isUpdate==false){
        this.Myser.addEmployee(emp);
      }
      else{
        this.Myser.updateEmployee(emp);
        this.isUpdate=false;
      }
      this.empform.reset();
      this.getAllEmployees();  
  }

  clearform(){
      this.empform.reset();
  }

  deleteEmp(id:any){
    let result=confirm("Do you want to delete "+id+" ?")
    if(result==true){
      this.Myser.deleteEmployee(id)
      this.getAllEmployees();
    }
  }

  

  editEmp(emp:any){
    this.isUpdate=true;
    this.empform.setValue({
      eid:emp.eid,
      ename:emp.ename,
      salary:emp.salary
    })
  }

   }
